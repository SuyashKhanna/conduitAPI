const Sequelize = require("sequelize");
const DT = Sequelize.DataTypes;

module.exports =
    {
        user: {
            email:
            {
                type: DT.STRING(100),
                allowNull: false,
                unique: true
            },
            password:
            {
                type: DT.STRING(500),
                allowNull: false
            },
            username:
            {
                type: DT.STRING(50),
                allowNull: false,
                unique: true
            },
            bio:
            {
                type: DT.STRING(100),
                allowNull: true
            },
            image:
            {
                type: DT.STRING(100),
                allowNull: true
            }
        }
    }

