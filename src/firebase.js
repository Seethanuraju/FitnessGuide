// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_O4LuGbrNZQ6l-M48tKWFdwCVA0Ayejg",
  authDomain: "fitnessguide-3b96d.firebaseapp.com",
  projectId: "fitnessguide-3b96d",
  storageBucket: "fitnessguide-3b96d.firebasestorage.app",
  messagingSenderId: "376563406103",
  appId: "1:376563406103:web:fa37d902f876743eb81352",
  measurementId: "G-P6HQ7KMFDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export default app;