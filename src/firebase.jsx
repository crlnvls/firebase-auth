import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7Ox8BgA5hEZGFtou7-3Jr3vEkDLj-43E",
  authDomain: "fir-auth-a4d4f.firebaseapp.com",
  projectId: "fir-auth-a4d4f",
  storageBucket: "fir-auth-a4d4f.appspot.com",
  messagingSenderId: "377292991047",
  appId: "1:377292991047:web:ae309cd913137badee1f62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const authApp = getAuth(app);
