const express = require("express");
const app = express();
const path = require("path");
const hbs =  require("hbs");
const Register = require("./models/register");
const bcrypt = require("bcryptjs");
require("./db/conn");
require('dotenv').config();

const port = process.env.PORT||5000;

const static_path = path.join(__dirname,"../public");
const views_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",async(req,res)=>{
    try{
        const email = req.body.mail;
        const password = req.body.passwrd;
        console.log(email + " " + password);
        const user = await Register.findOne({email:email});
        console.log(user);
        if(user.passwrd == password){
            res.status(201).send("Welcome to the home page");
        }else{
            res.send("invalid username or password");
        }

    }catch(e){
        console.log(e);
        res.status(400).send("Invalid email or Password");
    }})

app.get("/",(req,res)=>{
    res.render("register");
})

app.post("/register",async(req,res)=>{
    try{
        const {fname,lname,contact,email,address,userid,passwrd} = req.body;
        const registeremployee =  new Register({
            fname,lname,contact,email,address,userid,passwrd 
        })

        const registered = await registeremployee.save();
        res.render("login")

    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
