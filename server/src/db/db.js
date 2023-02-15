'use strict';
const firebase = require('firebase');
//const { initializeApp } = require('firebase/app');
//import { initializeApp } from "firebase/app";
const config = require('../config');

//const app = initializeApp(config.firebaseConfig)

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;



// Here I am CodigoJaguar