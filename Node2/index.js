const express = require('express')

const app =express();

const path = require('path');

app.use(express.static(path.join(__dirname,'public')));


app.get('/project',(req,res)=>{

  res.sendFile(path.join(__dirname,'views','Home.html'));

});
app.get('/arrays',(req,res)=>{

  res.sendFile(path.join(__dirname,'views','arrays.html'));

});
app.get('/project/events',(req,res)=>{

  res.sendFile(path.join(__dirname,'views','events.html'));

});
app.get('/project/form',(req,res)=>{

  res.sendFile(path.join(__dirname,'views','form.html'));

});
app.get('/project/index',(req,res)=>{

  res.sendFile(path.join(__dirname,'views','index.html'));

});
app.get('/project/jokeGenerator',(req,res)=>{

  res.sendFile(path.join(__dirname,'views','jokeGenerator.html'));

});
app.get('/project/Main',(req,res)=>{

  res.sendFile(path.join(__dirname,'views','Main.html'));

});



// build login page and signup and a request handler that serves you when you request them in views username,password for signup

// app.get('/',(req,res)=>{
//   res.send('Welcome to my Web Site ');
// });

// app.get('/arrays',(req,res)=>{
//   res.send('ARRAYS  ');
// });

// app.get('/events',(req,res)=>{
//   res.send('Events');
// });

// app.get('/form',(req,res)=>{
//   res.send('FORM');
// });

// app.get('/jokes',(req,res)=>{
//   res.send('JOKES');
// });

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
})

/* install nodemon 'npm i -g nodemon' to avoid refreshing each time run as nodemon index.js */



