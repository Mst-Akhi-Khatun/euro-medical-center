import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
initializeAuth();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {setLoading(false)}) 
    }

    // email and password sign up
    const UserSignUp = (email, password, name) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)            
            .finally(() => setLoading(false));
    }

     // email & password login
     const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)            
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({});
            }
            setLoading(false)
        });
    }, [])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {setLoading(false)})
    }

    return {
        googleSignIn,
        user,
        error,
        logOut,
        loading,
        userLogin,
        UserSignUp
    }
}

export default useFirebase;