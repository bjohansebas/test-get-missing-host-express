var express = require("express")
var http = require("http")

var app = express()
var server = http.createServer(app)

server.listen(3000)

console.log(server.address().address) 

server.close()  