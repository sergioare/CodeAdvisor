import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'

// const {
//     PORT,
//     HOST,
//     HOST_URL,
//     API_KEY,
//     AUTH_DOMAIN,
//     PROJECT_ID,
//     STORAGE_BUCKET,
//     MESSAGING_SENDER_ID,
//     APP_ID,
//     MEASUREMENT_ID
// } = process.env;



const firebaseConfig = {
  // apiKey: "AIzaSyDKd3GIIfTmZ41ZVDziBlNWPi2fsrspFL4",
  // authDomain: "pf-beta-ang31.firebaseapp.com",
  // projectId: "pf-beta-ang31",
  // storageBucket: "pf-beta-ang31.appspot.com",
  // messagingSenderId: "441630734207",
  // appId: "1:441630734207:web:1ae8bcd766af85730b0c4a",
  // measurementId: "G-30PVTTBKSE"

  // apiKey:"AIzaSyDUn1Jt7t11horS5B5ndanz_SASVQXBW1w",    
  // authDomain:"fp-db-7ed59.firebaseapp.com",                
  // projectId:"fp-db-7ed59",                                
  // storageBucket:"fp-db-7ed59.appspot.com",                    
  // messagingSenderId:"992895280377",                               
  // appId:"1:992895280377:web:392fa060d7f8d65f582e28",  
  // measurementId:"G-FXNDD5QK4G"

  apiKey: "AIzaSyDQVoL7G5EOxnbYZaigRuj9DQuzY9nkPlM",
  authDomain: 'fb-2do.firebaseapp.com',
  projectId: "fb-2do",
  storageBucket: 'fb-2do.appspot.com',
  messagingSenderId: '812758619537',
  appId: "1:812758619537:web:269beeda8245a2f1a9f630",
  measurementId: 'G-CGZZGWFR0F',
  
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage =  getStorage(app)




//  Posiblemente aparte de archivo 'File', se puede agregar el nombre del archivo por parametro al fileRef
export function UploadFile(File,name) {
  //  Cualquier archivo que se suba tendrá el nombre File.jpg, si ya existe, lo remplaza
  const fileRef = ref(storage, name);
  uploadBytes(fileRef, File).then((snapshot) => {
    console.log(snapshot);
    console.log('Uploaded a blob or file!');
  });
  const Url = getDownloadURL(fileRef).then(url => url)
  return Url;
}
