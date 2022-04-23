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
  apiKey: "AIzaSyBPIOVTS9bpzBMe7Tb8-Jrk0Fd-TsXe9ro",
  authDomain: "fireblog-app-6de0d.firebaseapp.com",
  databaseURL: "https://fireblog-app-6de0d-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-6de0d",
  storageBucket: "fireblog-app-6de0d.appspot.com",
  messagingSenderId: "513818768410",
  appId: "1:513818768410:web:cc8ed1922203ac5111cda3"
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
export const setUser = ({title, url, content}) => {
  console.log("setuser")
  const db = getDatabase();
  const userRef = ref(db, "baglanti");
  const newUserRef = push(userRef)
  set((newUserRef), {
    title: title,
    url: url,
    content: content,
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