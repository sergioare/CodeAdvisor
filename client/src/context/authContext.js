import { createContext , useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword ,signOut, signInWithEmailAndPassword, 
    GoogleAuthProvider,sendPasswordResetEmail, onAuthStateChanged,
    signInWithPopup, getAuth, sendEmailVerification } from 'firebase/auth';
import {auth} from '../firebase';

export const authContext = createContext();
 
export const useAuth = ()=>{
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider')
    return context
}



export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  

    const verifyEmail = ()=>{
      const auth = getAuth();
    sendEmailVerification(auth.currentUser)
    .then(() => {
          console.log('Current user',auth.currentUser)
          alert('confirm your email')
    });

    }
    

    const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
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
        if (user?.uid) {
          const token = user.accessToken
          window.localStorage.setItem("tokken", token)
          // const tokken = window.localStorage.getItem("tokken")
        }
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