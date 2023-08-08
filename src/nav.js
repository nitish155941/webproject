// const express = require("express");
// const app = express();
// const port = 3000;
// app.get('/',(req,res)=>{
//         res.send('Hello world');
// });
// app.get('/about',(req,res)=>{
//         res.write("<h1>welcome in about section</h1>");
//         res.write("<h1>welcome in about section</h1>");
//         res.send();
// });
// app.get('/contact',(req,res)=>{
//         res.status(200).send('Welcome in contact section');
// });
// app.get('/temp',(req,res)=>{
//         res.json("dfghjk");
// });
// //The methods are identical when an object or array is passed 
// // But res.json() will alse convert non-objects
// //such as null and undefined , which are not valid JSON.
// app.listen(port,()=>{
//     console.log(`lisnting is port on ${port}`);
// });