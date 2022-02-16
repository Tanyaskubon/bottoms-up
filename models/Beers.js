const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Beers extends Model {}

Beers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      beer_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      beer_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isDecription: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'beers'
    }
  );
  module.exports = Beers;