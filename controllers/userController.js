


const userModel = require('../models/users');
const SignUpJoi = require('../utils/validation/signupjoi');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('your-secret-key'); 

const SignUp = async (req, res) => {
    try {
        const data = req.body;
        const isJoiValidated = await SignUpJoi.validateAsync(data);

        const encryptedString = cryptr.encrypt(data.password);
        data.password = encryptedString;

        console.log(data);

        const toSave = new userModel(data);
        await toSave.save();

        res.status(200).json({ message: 'Added successfully' });
    } catch (error) {
        console.error('Error during sign up:', error);
        res.status(500).json({ status: false, error: error.message || 'An error occurred during sign up' });
    }
};




const Login=async(req,res)=>{
    const data=req.body
    
    await SignUpJoi.validateAsync(data)

    console.log(data);

    const isExist = await userModel.findOne({email:req.body.email, password:req.body.password})
    if(!isExist) throw new error('user not found')

        const decryptedPassword = cryptr.decrypt(user.password);

        if (decryptedPassword !== data.password) throw new Error('Invalid password');

        const token= await jwtToken (isExist.email, isExist.password)
        console.log('token   :' +token);
   
    res.status(200).send({status:true,message : 'login success',token:token})

}
module.exports = Login,SignUp








