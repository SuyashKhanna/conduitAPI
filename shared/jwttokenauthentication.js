var jwt    = require('jsonwebtoken');
var config = require('../config');

module.exports = {
  genrateToken: function(userName,userId)
  {
    const payload = {userName: userName, userId: userId};
    var token = jwt.sign(payload, config.secret , {
      expiresIn : 60*60*24 // expires in 24 hours
    });
    return token;
  },
  checkToken: function(token)
  {
    if (token) {
       // verifies secret and checks exp
       try {
         var decoded = jwt.verify(token, config.secret);
         return decoded;
       } catch(err) {
         // err
         return null;
       }
     }
     else {
       // if there is no token
       // return an error
       return null;
     }
  }
}; 
 
