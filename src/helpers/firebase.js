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
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const app = initializeApp({

  databaseURL: "https://blog-f2c3a-default-rtdb.firebaseio.com/",


  apiKey: "AIzaSyBQWB5u5M7AUdQIQtZM_zGpMZs7gBRe-BE",
  authDomain: "blog-f2c3a.firebaseapp.com",
  projectId: "blog-f2c3a",
  storageBucket: "blog-f2c3a.appspot.com",
  messagingSenderId: "514836545338",
  appId: "1:514836545338:web:ca226909aca2e335c2da03"
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
    .then((result) => { })
    .catch((error) => {
      console.log(error);
    });
};

export const getUser = () => {
    const [user, setUser] = useState("")
    onAuthStateChanged(auth, (usr) => {
        setUser(usr)
    
    });
    return user;
}

const database = getDatabase(app);

// Bilgi Ekleme
export const addUser = ({title, url, content, user, date}) => {

  const db = getDatabase();
  const userRef = ref(db, "baglanti");
  const newUserRef = push(userRef)
  set((newUserRef), {
    title: title,
    url: url,
    content: content,
    date: date,
    user: user

  })
}

// Bilgi Çağırma

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    setIsLoading(true)

    const db = getDatabase();
    const userRef = ref(db, "baglanti");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const baglantiArray = [];

      for (let id in data) {
        baglantiArray.push({ id, ...data[id] })
      }
      setBlogList(baglantiArray);
      setIsLoading(false);
    });
  }, [])
  return { isLoading, blogList }
}

// Bilgi silme
export const DeleteUser = (id) => {
  const db = getDatabase();
  const userRef = ref(db, "baglanti");
  remove(ref(db, "baglanti/" + id))

  // Toastify("Kullanıcı bilgisi silindi")
}

// Bilgi Değiştirme

export const EditUser = (info) => {
  const db = getDatabase();
  const updates = {};

  updates["baglanti/" + info.id] = info;
  return update(ref(db), updates);

}