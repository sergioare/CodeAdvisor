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
  apiKey: "AIzaSyBJx1qDtFdOikWplgVfvIlKURe3yWPgt50",
  authDomain: "platziblog-a4eff.firebaseapp.com",
  projectId: "platziblog-a4eff",
  storageBucket: "platziblog-a4eff.appspot.com",
  messagingSenderId: "1015089930452",
  appId: "1:1015089930452:web:b372dcac109ee22c421b41",
  measurementId: "G-XCMTMT8B07"
  
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
