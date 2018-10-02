export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      username: DataTypes.STRING,
    });
  
    User.associate = (models) => {
      // 1 to many with board
      User.hasMany(models.Route, {
        foreignKey: 'userId',
      });
      // 1 to many with suggestion
      User.hasMany(models.Gym, {
        foreignKey: 'userId',
      });
    };
  
    return User;
  };