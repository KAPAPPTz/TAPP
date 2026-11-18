
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoIfERsx25cBgxngxqPEfOBh6DOzitepc",
  authDomain: "tap-4078a.firebaseapp.com",
  projectId: "tap-4078a",
  storageBucket: "tap-4078a.firebasestorage.app",
  messagingSenderId: "1011383596003",
  appId: "1:1011383596003:web:819a333518ba1385a226d6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
