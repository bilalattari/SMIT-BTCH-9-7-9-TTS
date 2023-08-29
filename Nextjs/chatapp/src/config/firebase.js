// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { getFirestore, doc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAHTfXo_j8re4XESvgc6vyjwAPQGnAHwwo",
    authDomain: "chatapp-4d53b.firebaseapp.com",
    projectId: "chatapp-4d53b",
    storageBucket: "chatapp-4d53b.appspot.com",
    messagingSenderId: "111713774095",
    appId: "1:111713774095:web:fc56fb942fd5722807d17a",
    measurementId: "G-XKWBYQ6D0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);


export const createAccount = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const setUserData = async (obj) => {
    const ref = doc(db, 'users', obj.uid)
    return await setDoc(ref, obj)
}

export const uploadImg = async (file, uid) => {
    const imgRef = ref(storage, `users/${uid}`)
    let uploadfile = await uploadBytes(imgRef, file)
    let url = await getDownloadURL(imgRef)
    return url
}
