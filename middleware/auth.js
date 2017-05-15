const jwt = require("jsonwebtoken");

const authApi = (req,res,next) => {

      var token = req.body.token ||
                  req.headers["x-access-token"];

          jwt.verify(token, "area51", (err,decoded) => {
              if (err) {
                console.log(err);
                res.status(401).json({
                  success:false,
                  message:"Invalid token"
                });
              } else {
                var data = decoded.data;
                console.log(data);
                next();
              };
          });
    };



module.exports = authApi;
