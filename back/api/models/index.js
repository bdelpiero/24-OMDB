const User = require("./User");
const Favourite = require("./Favourite");

User.hasMany(Favourite);
Favourite.belongsTo(User);

module.exports = {
  User: User,
  Favourite: Favourite,
};
