const Sequelize = require('sequelize')


const { article } = require('./models/ArticleModel');
const { comment } = require('./models/CommentModel');
const { user } = require('./models/UserModel');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/store.db'
  })

  const Article = db.define('article',article);
  const Comment = db.define('comment',comment);
  const User = db.define('user',user);

  User.hasMany(Article);
  Article.belongsTo(User, {as : 'author'});

  User.belongsToMany(Article,{as : 'FavouritedByUser',through : 'favouritedArticles'})
  Article.belongsToMany(User,{as : 'FavouritedArticle', through : 'favouritedArticles'})

  User.hasMany(Comment, {as : 'author'});
  Comment.belongsTo(User, {as : 'author'});

  Article.hasMany(Comment);
  Comment.belongsTo(Article);

  module.exports = {
    db,
    User,
    Article,
    Comment
  }
