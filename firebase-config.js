// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAxudvGpv_imSXryCYxV1O8z9UWmBMBrCE",
  authDomain: "encuestashanty-ea42f.firebaseapp.com",
  projectId: "encuestashanty-ea42f",
  storageBucket: "encuestashanty-ea42f.firebasestorage.app",
  messagingSenderId: "43878288067",
  appId: "1:43878288067:web:6bd22f057ec4fa71ae3076",
  measurementId: "G-75Z9FF9PSN"
};
// Inicializa Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
window.db = firebase.firestore();
