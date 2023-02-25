const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserShow extends Model { }

UserShow.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    show_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "show",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usershows',
  }
);

module.exports = UserShow;