const mongoose = require("mongoose");
const Port = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/FormRegistration";
mongoose.connect(Port,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connection succesfull");
}).catch((e)=>{
    console.log(e);
    console.log("No connection");
})