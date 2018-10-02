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

    return Route;
};