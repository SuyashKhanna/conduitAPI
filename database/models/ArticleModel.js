const Sequelize = require("sequelize");
const DT = Sequelize.DataTypes;

module.exports = 
{
    article: {
        slug: 
        { 
            type : DT.STRING(50),
            allowNull : false,
            unique : true
        },
        title:
        {
            type : DT.STRING(50),
            allowNull : false
        },
        description: 
        {
            type : DT.STRING(200),
            allowNull : false
        },
        body:  
        {
            type : DT.STRING(500),
            allowNull : false
        },
        favorited:
        {
            type : DT.BOOLEAN,
            allowNull : false
        },
        favoritesCount: 
        {
            type : Sequelize.DataTypes.INTEGER,
            allowNull : false
        },
        authorUsername: {
            type : DT.STRING(500),
            allowNull : false
        }
      }
}