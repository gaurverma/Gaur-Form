const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/FormRegistration",{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connection succesfull");
}).catch((e)=>{
    console.log(e);
    console.log("No connection");
})