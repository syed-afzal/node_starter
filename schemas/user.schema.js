module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        user_id: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            default: true,
        }},
        {
            timestamps: true,
            underscored: true,
        }
    )
};