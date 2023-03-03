import { createContext , useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword ,signOut, signInWithEmailAndPassword, 
    GoogleAuthProvider,sendPasswordResetEmail, onAuthStateChanged,
    signInWithPopup, getAuth, sendEmailVerification, setPersistence, browserSessionPersistence, browserLocalPersistence } from 'firebase/auth';
import {auth} from '../firebase';
import Swal from 'sweetalert2'


export const authContext = createContext();
 
export const useAuth = ()=>{
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider')
    return context
}



export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const showAlert = ()=>{
      Swal.fire({
      title: "Please, confirm your email inbox",
      icon: "info",
      footer: "<b>Continue to enjoy our services</b>",
      timer: 3000,
  })}

  const auth = getAuth();
   setPersistence(auth, browserLocalPersistence)
 
  const verifyEmail = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
          console.log('Current user',auth.currentUser)
          showAlert()    
        });
  }

    const signup = (email, password) => {
      setPersistence(auth, browserLocalPersistence)

      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
      setPersistence(auth, browserLocalPersistence)

      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const loginWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
    };
  
    const logout = () => signOut(auth);
  
    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
  
    useEffect(() => {
      const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
        // console.log( currentUser );
        
        // console.log( currentUser.displayName );
        setUser(currentUser);
        setLoading(false);
    
      });
      return () => unsubuscribe();
    }, []);
    
    
  
    return (
      <authContext.Provider
        value={{
          signup,
          login,
          user,
          logout,
          loading,
          loginWithGoogle,
          resetPassword,
          verifyEmail
        }}
      >
        {children}
      </authContext.Provider>
    );
  }
