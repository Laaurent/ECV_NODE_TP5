'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comment.init({
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    author: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};