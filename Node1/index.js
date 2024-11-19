const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{

  res.send('Hello ^_^ 💫💨')
})

app.listen(3000 ,()=>{
  console.log("The server is running on port 3000")
})

/*
STEPS
create folder 
initialize node project in the folder with 'npm init'
install express with 'npm install express'

 */