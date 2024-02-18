/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import getAuth, {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
//   Github login
const gitHubLogin = ()=> {
    setLoading(true)
    return signInWithPopup(auth, gitHubProvider)
}
//   Regsiter user
  const register = (email,password)=> {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
//   Login User
const login = (email,password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// Update Profile
const updateUserProfile = (name , photo)=> {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
}

// Log Out 
const logout = ()=> {
    setLoading(true)
    return signOut(auth)
}

// Get current user
useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
        setUser(currentUser)
        console.log('got user', currentUser)
        setLoading(false)
    })

    return ()=> unSubscribe();
},[])
  const authInfo = {
    googleLogin,
    gitHubLogin,
    login,
    register, 
    logout,
    updateUserProfile,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
