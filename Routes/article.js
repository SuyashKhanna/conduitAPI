const { Router } = require('express')
const { Op } = require('sequelize')
const { Article, db, User } = require('../database/index')
var authentication = require('../shared/jwttokenauthentication');

const route = Router();

route.get('/', async (req, res) => {
    const articles = await Article.findAll(
        {
            order: [['createdAt', 'DESC']],
            include : [{
                model : User , 
                as : 'author',
                attributes: ['username', 'bio', 'image']
            }]
        }
    );
    var allArticles = {
        articles: articles
    }
    res.status(200).json(allArticles);
});

route.get('/:slug', async (req, res) => {
    const article = await Article.findOne({
        where: {
            slug: req.params.slug
        },
        include : [{
            model : User , 
            as : 'author',
            attributes: ['username', 'bio', 'image']
        }]
    }
    )

    let resp = 
    {
        article : article
    }
    res.status(200).send(resp);
});

route.post('/', async (req, res) => {
    try {
        var authorizationstring = req.headers['authorization'];
        if (authorizationstring) {
            var tokens = authorizationstring.split(" ");
            var token = tokens[1];
            var user = authentication.checkToken(token);
            if (user) {
                let articleToBeAdded = req.body.article;

                let slug = articleToBeAdded.title.split(" ").join("-").toLowerCase();
                slug = slug + Date.now();

                articleToBeAdded = {
                    "slug": slug,
                    "title": articleToBeAdded.title,
                    "body": articleToBeAdded.body,
                    "description": articleToBeAdded.description,
                    "favoritesCount": 0,
                    "favorited": false,
                    "authorUsername": user.userName,
                    "authorId": user.userId 
                }
                Article.create(articleToBeAdded).then(
                    (value) => {
                        let article = { article : value }
                        res.status(200).send(article);
                    }).error(console.log("error"));
            }
            else {
                res.status(401).send("unauthorize user");
            }
        }
        else {
            res.status(401).send("unauthorize user");
        }
    }
    catch (err) {
        res.send("error");
    }
});

route.put('/:slug', async (req, res) => {
    try {
        var authorizationstring = req.headers['authorization'];
        if (authorizationstring) {
            var tokens = authorizationstring.split(" ");
            var token = tokens[1];
            var user = authentication.checkToken(token);
            console.log(user);
            if (user) {
                Article.findOne({ where: { slug: req.params.slug } }).then((article) => {
                    if (article) {
                        if (article.dataValues.authorId == user.userId) {
                            let article = req.body.article;
                            let slug;
                            if (article.title) {
                                slug = article.title.split(" ").join("-").toLowerCase();
                                slug = slug + Date.now();
                            }
                            else {
                                slug = req.params.slug + Date.now();
                            }

                            let articleToBeUpdated = {
                                "slug": slug,
                                "title": article.title,
                                "body": article.body,
                                "description": article.description
                            }

                            Article.update(articleToBeUpdated, { returning: true, where: { slug: req.params.slug } })
                                .then(() => {
                                    res.json({ article: { slug : slug } });
                                });
                        }
                        else {
                            res.status(401).send("Unauthorize User");
                        }
                    }
                    else {
                        res.send(400).send("Bad Request");
                    }
                });
            }
            else {
                res.status(401).send("Unauthorize User");
            }
        }
        else {
            res.status(401).send("Unauthorize User");
        }
    }
    catch (err) {
        res.send("error");
    }
});

route.delete('/:slug', async (req, res) => {
    var authorizationstring = req.headers['authorization'];
    if (authorizationstring) {
        var tokens = authorizationstring.split(" ");
        var token = tokens[1];
        var user = authentication.checkToken(token);
        if (user) {
            Article.findOne({ where: { slug: req.params.slug } }).then((article) => {
                if (article) {
                    if (article.dataValues.authorId == user.userId) {
                        Article.destroy({ where: { slug: req.params.slug } });
                        res.status(200).json({"message" : "deleted"});
                    }
                    else {
                        res.status(401).send("Unauthorize User");
                    }
                }
                else {
                    res.send(400).send("Bad Request");
                }
            });
        }
        else {
            res.status(401).send("Unauthorize User");
        }
    }
    else {
        res.status(401).send("Unauthorize User");
    }
}
);

module.exports = route;

