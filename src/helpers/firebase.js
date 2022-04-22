// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

// export const firebaseConfig = {
//   apiKey: "AIzaSyDz-3bYc5mtMbcwTqFCz5nUbMgaZTpdfaw",
//   authDomain: "fire-blog-app-b22f5.firebaseapp.com",
//   projectId: "fire-blog-app-b22f5",
//   storageBucket: "fire-blog-app-b22f5.appspot.com",
//   messagingSenderId: "534148198063",
//   appId: "1:534148198063:web:86d0cecbe1b0fb7c3fee5a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// export const createUser = (email, password) => {
//   try {
//     return createUserWithEmailAndPassword(auth)
//     // console.log(userCredantial)
//   } catch (error) {
//     alert(error)
//     console.log(email, password)
//   }
//  } 

// export const login = async (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
  
//   };

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDz-3bYc5mtMbcwTqFCz5nUbMgaZTpdfaw",
  authDomain: "fire-blog-app-b22f5.firebaseapp.com",
  projectId: "fire-blog-app-b22f5",
  storageBucket: "fire-blog-app-b22f5.appspot.com",
  messagingSenderId: "534148198063",
  appId: "1:534148198063:web:86d0cecbe1b0fb7c3fee5a"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth);
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};

export const getUser = () =>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return user
      // ...
    } else {
      // User is signed out
      // ...
     
    }
  });
}

