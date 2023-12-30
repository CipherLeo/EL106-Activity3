// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI4PpCPomcASgFBxjjN-QC8rh33p3z-Cs",
  authDomain: "todoapp-adcba.firebaseapp.com",
  projectId: "todoapp-adcba",
  storageBucket: "todoapp-adcba.appspot.com",
  messagingSenderId: "1032317458647",
  appId: "1:1032317458647:web:15d004b485225ad612f892",
  measurementId: "G-GEVDV14Q7R"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFireStore(FIREBASE_APP);