const User = require('./User');
const Beers = require("./Beers");

User.hasMany(Beers, {
    foreignKey: 'user_id'
  });
  Beers.belongsTo(User, {
    foreignKey: 'user_id',
  });


module.exports = { User, Beers };