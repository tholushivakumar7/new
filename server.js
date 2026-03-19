const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

// MySQL connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"login_db"
});

db.connect(function(err){
    if(err) throw err;
    console.log("MySQL Connected");
});

// login page
app.get("/",function(req,res){
    res.sendFile(__dirname + "/login.html");
});

// login check
app.post("/login",function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    const sql = "SELECT * FROM users WHERE username=? AND password=?";

    db.query(sql,[username,password],function(err,result){

        if(result.length > 0){
            res.send("Login Successful");
        }
        else{
            res.send("Invalid Username or Password");
        }

    });

});

app.listen(3000,function(){
    console.log("Server running on port 3000");
});