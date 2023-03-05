import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBx16cqPYgzrS1DyLPJSSevN7VYfBTSR-Q",
  authDomain: "newsletterimmerse-47869.firebaseapp.com",
  projectId: "newsletterimmerse-47869",
  storageBucket: "newsletterimmerse-47869.appspot.com",
  messagingSenderId: "80959381124",
  appId: "1:80959381124:web:1e8aceadc495e0e278acd1",
  measurementId: "G-LQTYC3CJVX"
};

  const app = initializeApp(firebaseConfig, "firebaseEmail");
  const analytics = getAnalytics(app);
  export const db = getFirestore(app)