var jwt = require('jsonwebtoken');
const secretkey= process.env.jwtsecretkey

const jwtToken = async (user,password)=>{
const userData={user,password};
const options={ 
    expiresIn: '1hr',
    audience: 'jaseem',
    issuer: 'entri',

 }


    let token = await jwt.sign(userData,secretkey,options);
    return token;
}

const verifyToken = async (req,res,next)=>{
    try {

    if(!req.headers['authorization']) throw new Error

        let token = req.headers['authorization'].split('')[1]
        if(!token) throw new Error
        
            jwt.verify(token,secretkey,(err,payload)=>{
                if(err) throw new Error
                    next();
            })
                    
    } catch (error) {
        res.status(401).send({err:'Unauthorized'})
        
    }
}
module.exports = {jwtToken,verifyToken};