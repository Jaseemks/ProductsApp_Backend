const userModel=require('../models/users');
const { jwtToken } = require('../utils/jwttoken');
const SignUpJoi = require('../utils/validation/signupjoi');


const SignUp=async(req,res)=>{
    const data=req.body
    const isJoiValidated = await SignUpJoi.validateAsync(data)

    console.log(data);
    const toSave = new userModel(data)
    await toSave.save() 

    res.status(200).send('Added successfully')
}


const Login=async(req,res)=>{
    const data=req.body
    
    await SignUpJoi.validateAsync(data)

    console.log(data);

    const isExist = await userModel.findOne({email:req.body.email, password:req.body.password})
    if(!isExist) throw new error('user not found')

        const token= await jwtToken (isExist.email, isExist.password)
        console.log('token   :' +token);
   
    res.status(200).send({status:true,message : 'login success',token:token})
}
module.exports = Login,SignUp






