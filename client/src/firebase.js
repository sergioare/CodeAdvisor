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
  authDomain: AUTH_DOMAIN,
  projectId: "pf-beta-ang31",
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: "1:441630734207:web:1ae8bcd766af85730b0c4a",
  measurementId: MEASUREMENT_ID
};

console.log(API_KEY)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
