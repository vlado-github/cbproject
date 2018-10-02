export default (sequelize, DataTypes) => {
    const Route = sequelize.define('route', {
        name: {
            type: DataTypes.STRING
        },
        grade: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        photo: {
            type: DataTypes.STRING
        }
    });

    Route.associate = (models) => {
        // 1 to many with Route
        Route.belongsTo(models.Gym, {
          foreignKey: 'gymId',
        });
      };

    return Route;
};