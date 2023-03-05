import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWsAP_joj5YrW4y4FkSaZXKIuvXXLkz-c",
  authDomain: "blog-react-fir.firebaseapp.com",
  projectId: "blog-react-fir",
  storageBucket: "blog-react-fir.appspot.com",
  messagingSenderId: "445214385339",
  appId: "1:445214385339:web:0b2c64b947508a69dff59e"
};

const app = initializeApp(firebaseConfig, "firebase-blog");
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
