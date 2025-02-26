const express = require('express');
const Authrouter = express.Router();  
const authControllers = require('../controller/Sign-user-controller');

Authrouter.route("/register").post(authControllers.register); 
Authrouter.route("/login").post(authControllers.login); 

module.exports = Authrouter;
