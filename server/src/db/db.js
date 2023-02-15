import * as dotenv from 'dotenv';
dotenv.config();
//import  { Sequelize, where } from 'sequelize';
//------------------------- firestore ------------
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {collection, getDocs, getFirestore, query} from 'firebase/firestore';
//-----------------------------------------------

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env

// export const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//   dialect: 'postgres', 
//   native: false, 
// })

//--------------------------------------------------------Firebase-------------------
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKd3GIIfTmZ41ZVDziBlNWPi2fsrspFL4",
  authDomain: "pf-beta-ang31.firebaseapp.com",
  projectId: "pf-beta-ang31",
  storageBucket: "pf-beta-ang31.appspot.com",
  messagingSenderId: "441630734207",
  appId: "1:441630734207:web:1ae8bcd766af85730b0c4a",
  measurementId: "G-30PVTTBKSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
// -------------------------------------------------
// db.collection('todos').getDocs();   crear collection
 const todosCol = collection(db,'usuario');
// const snapshot = await getDocs(todosCol);
const simpleQuery = query(
  todosCol,
  where('usu','==','campo1')
)
console.log(simpleQuery)



// Here I am CodigoJaguar