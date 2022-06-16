const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.listen(3000,()=>{
    console.log('your server is running on 3000');
})

let data = {};
let countUrl = 0;


app.get("/",function(req,res,next){
    res.send("Hello world!");
    countUrl++;
})

app.get("/add",function(req,res,next){
    res.sendFile(path.join(__dirname,'public','form2.html'));
})

app.post("/add", function(req,res,next){
    console.log(req.body);
    data = req.body;
    res.redirect('/view');
})

app.get("/view",function(req,res,next){
    
     let html="";
     html += labelData("First Name", data["name"]);
     html += labelData("Gender", data["gender"]);
     html += labelData("Program", data["pro"]);
     html += labelData("Course", data["course"]);
     html += labelData("About", data["txtarea"]);
     html += '<p> Count Url:' + countUrl+ '</p>';
     res.send(html);
     

})

function labelData(label,data){
    return "<span>" + label +":" + data +"</span></br>"
}
app.use('/error',(req, res, next) => {
    res.send(error());
    
})

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'public','notfound.html'))
})



app.use((error,req, res, next) => {
    res.status(500);
    res.sendFile(path.join(__dirname,'public', 'error.html'))
})


     