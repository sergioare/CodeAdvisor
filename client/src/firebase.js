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
