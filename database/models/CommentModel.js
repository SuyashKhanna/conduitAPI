const Sequelize = require("sequelize");
const DT = Sequelize.DataTypes;

module.exports = 
{
    comment: {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        body: {
            type : DT.STRING(100),
            allowNull : false
        },
    }
}