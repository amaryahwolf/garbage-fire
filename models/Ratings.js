const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ratings extends Model {}

Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.Integer,
        references: {
            model: 'user',
            key: 'id'
        },
      },
      comment_id: {
        type: DataTypes.Integer,
        references: {
            model: 'comments',
            key: 'id',
        },
      },
      show_id: {
        type: DataTypes.Integer,
        references: {
            model: 'user',
            key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'ratings',
    }
  );
  
  module.exports = Ratings;