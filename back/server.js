const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
const User = require("./api/models/User");
const FacebookStrategy = require("passport-facebook").Strategy;
const facebookRouter = require("./api/routes/facebook");

const app = express();
const authAPI = require("./api/routes");

app.use(cors());
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser()); // popula req.cookie
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
); // popula req.session

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "1236402420076401",
      clientSecret: "9d1d18d4a1f461487e83ab2038a3ce58",
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["id", "emails", "name"], //This
    },
    function (accessToken, refreshToken, profile, done) {
      const email = profile.emails[0].value;
      const userName = profile.name.givenName;
      // const id = profile.id.substring(0, 5);
      User.findOrCreate({
        where: { userName: userName, email: email },
      })
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          done(null, user);
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  // console.log(user.id);
  const id = user.id ? user.id : user[0].dataValues.id;
  done(null, id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// express routing
app.use("/auth", facebookRouter);
app.use("/api", authAPI);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// error middleware:
app.use((err, req, res, next) => {
  res.sendStatus(err);
});

db.sync({ force: true }).then(() =>
  app.listen(3000, (req, res, next) => {
    console.log("API on port 3000");
  })
);
