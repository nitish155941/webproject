const express = require("express");
const path = require('path');
const requests = require('requests');
const app = express();
const hbs = require("hbs");
const port = 3000;

// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));
app.set("view engine", "hbs");
// const staticPath = path.join(__dirname,"../views");
const staticPath = path.join(__dirname,"../public");
const staticPathCss = path.join(__dirname, "../public/css");
app.use(express.static(staticPathCss));
const templetPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials")
// To set the view Engine 
app.set('views',templetPath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

// app.get("/",(req,res)=>{
//     res.render('index');
// });

// app.get('/about',(req,res)=>{
//     res.render('about');
// })
app.get('/',(req,res)=>{
    res.render("index",{
        Passwrds:"Password",
    })
});
app.get('/about',(req,res)=>{
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.quary.name}&appid=0770ec5da3ed4a1567202d67b2557e39`
    )
    .on("data",(check)=>{
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
        res.write(arrData[0].name);
    })
    .on("end",(err)=>{
        if(err) return console.log("connection closed due to errors ",err);
    });
        // res.render("about");
        // res.send();
});
app.get('/contact',(req,res)=>{
        res.status(200).send('Welcome in contact section');
});

app.get('/about/*',(req,res)=>{
    res.render("404",{
        errorcomment : "Oops page inside about couldn't be found",
    });
})
app.get('*',(req,res)=>{
    res.render("404",{
        errorcomment : "Oops page couldn't be found",
    });
});
app.get('/temp',(req,res)=>{
        res.json([
            {
                id:1,
                name:"Nitish",
                college:"IIITL",
            },
        ]);
});
app.listen(port,()=>{
    console.log(`lisnting is port on ${port}`);
});









// The methods are identical when an object or array is passed 
// But res.json() will alse convert non-objects
// such as null and undefined , which are not valid JSON.
