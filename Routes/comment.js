const { Router } = require('express')
const { Op } = require('sequelize')
const { Article, Comment, db, User } = require('../database/index')
var authentication = require('../shared/jwttokenauthentication');

const route = Router();

route.get('/articles/:slug/comments', async (req, res) => {

    const article = await Article.findOne(
        {
            where: { slug: req.params.slug }
        }
    );

    if(article)
    {
    let articleID = article.id;

    let comments = await Comment.findAll(
        {
            where: { articleId: articleID },
            include: [{
                model: User,
                as: 'author',
                attributes: ['username', 'bio', 'image']
            }]
        }
    );

    res.status(200).json({ comments: comments });
    }
    else
    {
        res.status(400).send("Bad request");
    }
});

route.post('/articles/:slug/comments', async (req, res) => {
    try {
        var authorizationstring = req.headers['authorization'];
        if (authorizationstring) {
            var tokens = authorizationstring.split(" ");
            var token = tokens[1];
            var user = authentication.checkToken(token);
            if (user) {
                const article = await Article.findOne(
                    {
                        where: { slug: req.params.slug }
                    }
                );

                const author = await User.findOne(
                    {
                        where : { id : user.userId }
                    }
                );

                const comment = await Comment.create(
                    {
                        body: req.body.comment.body,
                        authorId : author.id
                    }
                );

                await article.addComment(comment);

                commentAdded = await Comment.findOne(
                    {
                        where: { id: comment.id },
                        include: [{
                            model: User,
                            as: 'author',
                            attributes: ['username', 'bio', 'image']
                        }]
                    }
                );
                res.status(200).json({ "comment": commentAdded });
            }
            else {
                res.status(401).send("Unauthorized User");
            }
        }
        else {
            res.status(401).send("Unauthorized User");
        }
    }
    catch (err) {
        res.status(400).send("Bad request");
    }

})

route.delete('/articles/:slug/comments/:id', async (req, res) => {
    var authorizationstring = req.headers['authorization'];
    if (authorizationstring) {
        var tokens = authorizationstring.split(" ");
        var token = tokens[1];
        var user = authentication.checkToken(token);

        if (user) {
            Comment.findOne({
                where: { id: req.params.id },
                include: [{
                    model: User,
                    as: 'author',
                    attributes: ['username', 'bio', 'image']
                }]
            }).then((comment) => {
                if (comment && comment.author.username == user.userName) {
                    Comment.destroy({ where: { id: req.params.id } });
                    res.status(200).json({ "message": "deleted" });
                }
                else {
                    res.status(401).send("Unauthorized User");
                }
            });
        }
        else {
            res.status(401).send("Unauthorized User");
        }
    }
    else {
        res.status(401).send("Unauthorized User");
    }
})


module.exports = route;