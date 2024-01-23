
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3cmPjSbSywTZg23roXoCoczyZE-yddxU",
  authDomain: "job-task-fb8e3.firebaseapp.com",
  projectId: "job-task-fb8e3",
  storageBucket: "job-task-fb8e3.appspot.com",
  messagingSenderId: "18221204223",
  appId: "1:18221204223:web:64f3f54edc78701f9482ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);