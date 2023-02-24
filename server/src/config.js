
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
<<<<<<< HEAD
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID,
        
=======
        apiKey: "AIzaSyDQVoL7G5EOxnbYZaigRuj9DQuzY9nkPlM",
        authDomain: "fb-2do.firebaseapp.com",
        projectId: "fb-2do",
        storageBucket: "fb-2do.appspot.com",
        messagingSenderId: "812758619537",
        appId: "1:812758619537:web:269beeda8245a2f1a9f630",
        measurementId: "G-CGZZGWFR0F"
>>>>>>> 0cfc89457307e4dbbc0d4c044e86d94fa1f355c0

    }
}

