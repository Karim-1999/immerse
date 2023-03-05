import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUrub_-XMvh6g7vi-IK8Xb0PKAnQovvCk",
  authDomain: "chat-firebase-9934b.firebaseapp.com",
  projectId: "chat-firebase-9934b",
  storageBucket: "chat-firebase-9934b.appspot.com",
  messagingSenderId: "707301887191",
  appId: "1:707301887191:web:972bfcd78f460852edb492"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
