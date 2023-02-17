import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { 
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword
 } from "firebase/auth";


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
  apiKey: "AIzaSyDKd3GIIfTmZ41ZVDziBlNWPi2fsrspFL4",
  authDomain: "pf-beta-ang31.firebaseapp.com",
  projectId: "pf-beta-ang31",
  storageBucket: "pf-beta-ang31.appspot.com",
  messagingSenderId: "441630734207",
  appId: "1:441630734207:web:1ae8bcd766af85730b0c4a",
  measurementId: "G-30PVTTBKSE"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//const analytics = getAnalytics(app);
