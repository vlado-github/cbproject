export default (sequelize, DataTypes) => {
    const Gym = sequelize.define('gym', {
        name: {
          type: DataTypes.STRING
        },
        city: {
          type: DataTypes.STRING
        },
        country: {
          type: DataTypes.STRING
        },
        photo: {
          type: DataTypes.STRING
        }
      });

    Gym.associate = (models) => {
        // 1 to many with Route
        Gym.hasMany(models.Route, {
          foreignKey: 'gymId',
        });
      };
    return Gym;
};