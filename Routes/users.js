var express = require('express');
var router = express.Router();
var { User } = require('../database/index');
var authentication = require('../shared/jwttokenauthentication');

/* GET User */
router.get('/user', async function(req, res, next) {
  var authorizationstring = req.headers['authorization'];
  if(authorizationstring)
  {
    var tokens = authorizationstring.split(" ");
    var token = tokens[1];
    var user = authentication.checkToken(token);
    if(user)
    {
      const resUser = await User.findOne({where: {username: user.userName}});
      if(resUser)
      {
        var response = {
          "user": {
            "email": resUser.dataValues.email,
            "token": token,
            "username": resUser.dataValues.username,
            "bio": resUser.dataValues.bio,
            "image": resUser.dataValues.image
          }
        }
        
        res.status(200).send(response);
      }
      else
      {
        var error = {
          "errors":{
            "body": [
              "email or password dont match with any credentials"
            ]
          }
        }
      }
    }
    else
    {
        res.status(401).send("unauthorize user");
    }
  }
  else
  {
        res.status(401).send("unauthorize user");
  }
});

/* Register User */
router.post('/users', function(req, res, next) {
  var user = req.body.user;
  var reqUser = {
    "email": user.email,
    "password": user.password,
    "username": user.username,
    "bio": "",
    "image": ""
  }
  User.create(reqUser).then((user) =>{
    var response = {
      "user": {
        "email": user.dataValues.email,
        "token": authentication.genrateToken(user.dataValues.username,user.dataValues.id),
        "username": user.dataValues.username,
        "bio": user.dataValues.bio,
        "image": user.dataValues.image
      }
    }
    res.status(200).send(response);
  }).error(console.log("error"));
});

/* POST Login */
router.post('/users/login', async function(req, res, next) {
  var reqUser = req.body.user;
  const resUser = await User.findOne({where: {email: reqUser.email,password: reqUser.password}});
  if(resUser)
  {
    var response = {
      "user": {
        "email": resUser.dataValues.email,
        "token": authentication.genrateToken(resUser.dataValues.username,resUser.dataValues.id),
        "username": resUser.dataValues.username,
        "bio": resUser.dataValues.bio,
        "image": resUser.dataValues.image
      }
    }
    res.status(200).send(response);
  }
  else
  {
    var error = {
      "errors":{
        "body": [
          "email or password dont match with any credentials"
        ]
      }
    }
  }
});

module.exports = router; 
 
