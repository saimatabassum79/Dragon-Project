// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcW2dF6n_yXONKZ0MmF21_7_28sZu4G98",
  authDomain: "dragon-news-e0da9.firebaseapp.com",
  projectId: "dragon-news-e0da9",
  storageBucket: "dragon-news-e0da9.firebasestorage.app",
  messagingSenderId: "166634803546",
  appId: "1:166634803546:web:42baeb9fb6d5c6f7aca363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app