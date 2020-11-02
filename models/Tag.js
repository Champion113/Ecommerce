const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      references: {
        model: product,
        key: 'id',
        deferrable: DataTypes.deferrable.INITIALLY_IMMEDIATE
      }
    },
    tag_id: {
      type: DataTypes.STRING,
      references: {
        model: tag,
        key: 'id',
        deferrable: DataTypes.deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
