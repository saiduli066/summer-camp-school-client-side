import React, { createContext, useEffect, useState } from "react";
// import {
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   signInWithPopup,
//   updateProfile,
// } from "firebase/auth";

export const AuthContext = createContext(null);

// const auth = getAuth(app);

const AuthProviders = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const googleProvider = new GoogleAuthProvider();

//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const handleGoogleSignIn = () => {
//     return signInWithPopup(auth, googleProvider);
//   };
 

//   const logOut = () => {
//     return signOut(auth);
//   };

//   const updateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     });
//   };
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       console.log("auth state change", currentUser);
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);
// TODO: remove this
    const authInfo = {
        
    }
//   const authInfo = {
//     user,
//     createUser,
//     signIn,
//     logOut,
//     loading,
//     setLoading,
//     handleGoogleSignIn,
//     setUser,
//     updateUserProfile,
//   };

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProviders;
