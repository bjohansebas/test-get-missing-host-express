var express = require("express")
var http = require("http")

var app = express()
var server = http.createServer(app)

server.listen(3000)

console.log(process.version.match(/^v(\d+\.\d+)/)[1] + ": '" + server.address().address + "'") 

server.close()  