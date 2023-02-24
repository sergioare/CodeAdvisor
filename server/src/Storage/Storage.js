const firebase = require('firebase/app');  
const config = require('../config');
require('firebase/storage')
const db = require('../db/db')


//firebase.initializeApp(config.firebaseConfig);
const storage = firebase.storage();

module.exports = storage;