// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User.models', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },{
       tableName:'users',
    }
   
  });

  return User;
};

module.exports = UserModel;