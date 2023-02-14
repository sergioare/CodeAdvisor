import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword
 } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXEa11aeeany--l217i6EZc2Y2NPg-fXY",
  authDomain: "codeadvisor-5f855.firebaseapp.com",
  projectId: "codeadvisor-5f855",
  storageBucket: "codeadvisor-5f855.appspot.com",
  messagingSenderId: "149482917408",
  appId: "1:149482917408:web:ec8f3f05ad8d3a05427645",
  measurementId: "G-ZZVBCR8WDH"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);