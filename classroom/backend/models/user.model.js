const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const User=new mongoose.Schema({
    firstName: {type:String,required: true},
    lastName: {type:String,required: true},
    email: {type:String,required: true,unique:true},
    password: {type:String,required: true},
    confirmpassword: {type:String,required: true},
    quote: {type:String},
}, {collection:'user-data'}
)

//password hashing
User.pre('save',async function(next) {
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.confirmpassword=await bcrypt.hash(this.confirmpassword,12);
    }
    next();
})

const model=mongoose.model('UserData',User)

module.exports=model