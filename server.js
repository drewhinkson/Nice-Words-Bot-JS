const express = require ('express')

const server = express()

server.all("/", (req,res)=>{
  res.send("bot is running");
})

function keepAlive (){
  server.listen(3000, () =>{
    console.log("server is ready on 3000");
  })
}

module.exports = keepAlive