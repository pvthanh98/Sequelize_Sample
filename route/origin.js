const express = require("express");
const route = express.Router();
let User = require("../models/user")(db);
route.get("/", async function(req, res){  
    const jane = await User.create({ username: "ThanhPhan", password: "123456" });
    res.send("inserted")
})

module.exports= route;