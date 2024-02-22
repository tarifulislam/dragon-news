
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtezSh2Ifgcu-cMAeIf1Sh6DJOquBnQXE",
  authDomain: "dragon-news-dd28f.firebaseapp.com",
  projectId: "dragon-news-dd28f",
  storageBucket: "dragon-news-dd28f.appspot.com",
  messagingSenderId: "728970600605",
  appId: "1:728970600605:web:3b05a0451e7e74c5beb474"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;