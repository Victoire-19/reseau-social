const mongoose = require('mongoose');
const{ isEmail } = require('validator');
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        pseudo:{
            type: String,
            required: true,
            minLength:3,
            maxLength: 55,
            unique: true
        },
        picture:{
            type:String,
            default: "./uploads/profil/random-user.png"
        },
        email:{
            type: String,
            required: true,
            unique: true,
            validate: [isEmail],
            lowercase: true,
            trim: true
            
        },
        password:{
            type: String,
            required: true,
            minlength:6,
            max: 1024,

        },
        bio:{
            type: String,
            max:1024,

        },
        following:{
            type:[String]
        },
        followers:{
            type:[String]

        },
        likes:{
            type:[String]

        }
    
    },
    {
        timestamps:true,
    }
)

// play before save into display :'block'

userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if (user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const userModel=mongoose.model('user', userSchema);
module.exports=userModel;