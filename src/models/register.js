const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const employeeSchema  =  new mongoose.Schema({
    fname: {
        type: String,
        required:true
    },
    mail: {
        type:String,
        unique: true,
        required: true
    },
    passwrd: {
        type:String,
        required:true
    },
    gender: {
        type: String
    }
})

employeeSchema.pre("save",async function(next){
   
        console.log(`the current password is ${this.password}`);
   
        return;
    //next();
})


const Register = new mongoose.model("Register",employeeSchema);
module.exports = Register;

