import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCD_de5WSvvYwlaVKZDP4Gr-uejfVME3GA",
    authDomain: "taha-s-food.firebaseapp.com",
    projectId: "taha-s-food",
    storageBucket: "taha-s-food.appspot.com",
    messagingSenderId: "775983995806",
    appId: "1:775983995806:web:50dc127493bdcd0d32548f",
    measurementId: "G-XWTT27Q04Y"
};

export const app = initializeApp(firebaseConfig);