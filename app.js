const express = require("express");
const app = express();
const http = require("http");
http.createServer(app).listen(8080, ()=> console.log("Server is running..."));
const db = require("./config/connect");

let route = require("./route/origin");

app.use("/",route); 
