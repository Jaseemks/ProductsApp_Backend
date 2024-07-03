const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : String,
        email : {
            type: String,
            unique : true,
        },
        password : String,
        isAdmin : Boolean,

    },{
      timestamps:true
    }
)

const userModel = mongoose.model('user',userSchema)

module.exports = userModel