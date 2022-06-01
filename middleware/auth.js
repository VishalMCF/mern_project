const jwt = require("jsonwebtoken");
const config = require("config");

const jwtverify = (req,res,next) => {
    const token = req.header('x-auth-token');

    // Check if not token
    if(!token){
        return res.status(401).json({msg: 'No token, Unauthorized denied'});
    }

    // Verify the token
    try{
        const decoded = jwt.verify(token,config.get('jwtSecret'))
        req.user = decoded.user;
        next();
    }catch(err){
        return res.status(500).json({msg:"TOken is Invalid"})
    }
}

module.exports = jwtverify