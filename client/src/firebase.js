import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword
<<<<<<< HEAD
 } from "firebase/auth";

// import dotenv from 'dotenv'; 
// dotenv.config();

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

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

console.log(API_KEY)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//const analytics = getAnalytics(app);
=======
  } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDXEa11aeeany--l217i6EZc2Y2NPg-fXY",
//   authDomain: "codeadvisor-5f855.firebaseapp.com",
//   projectId: "codeadvisor-5f855",
//   storageBucket: "codeadvisor-5f855.appspot.com",
//   messagingSenderId: "149482917408",
//   appId: "1:149482917408:web:ec8f3f05ad8d3a05427645",
//   measurementId: "G-ZZVBCR8WDH"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDKd3GIIfTmZ41ZVDziBlNWPi2fsrspFL4",
  authDomain: "pf-beta-ang31.firebaseapp.com",
  projectId: "pf-beta-ang31",
  storageBucket: "pf-beta-ang31.appspot.com",
  messagingSenderId: "441630734207",
  appId: "1:441630734207:web:1ae8bcd766af85730b0c4a",
  measurementId: "G-30PVTTBKSE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
>>>>>>> ade708211bfcec29742ccb751c183e6ed26be972
