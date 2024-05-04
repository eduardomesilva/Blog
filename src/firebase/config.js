import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAypKYOpurC-aoK7iQEsylFg-ymadh36Qs",
  authDomain: "blog-99831.firebaseapp.com",
  projectId: "blog-99831",
  storageBucket: "blog-99831.appspot.com",
  messagingSenderId: "20999852185",
  appId: "1:20999852185:web:fa8a628c7b89b9a04ba808"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }