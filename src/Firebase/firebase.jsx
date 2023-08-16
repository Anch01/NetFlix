import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhJfmumRaVtZ49alLeybzYRz14GfJbFyU",
  authDomain: "netflix-d5c98.firebaseapp.com",
  projectId: "netflix-d5c98",
  storageBucket: "netflix-d5c98.appspot.com",
  messagingSenderId: "1020855948867",
  appId: "1:1020855948867:web:f0e7f2f75b9f51f6a7e6f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);