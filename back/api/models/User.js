const S = require("sequelize");
const db = require("../../db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  validPassword(password) {
    return this.hash(password, this.salt) == this.password;
  }
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    userName: {
      type: S.STRING,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
    },
    imgURI: {
      type: S.STRING,
      defaultValue: "/img/default-user-image.png",
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
