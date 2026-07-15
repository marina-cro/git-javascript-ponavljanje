//firebase konfiguracija
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtHUI5V3qZPW1k-YXR6C-herzcpPnP-Nc",
  authDomain: "frontend-gen6.firebaseapp.com",
  databaseURL: "https://frontend-gen6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "frontend-gen6",
  storageBucket: "frontend-gen6.firebasestorage.app",
  messagingSenderId: "746180350454",
  appId: "1:746180350454:web:b40c0dc187eafbe6c237d7",
  measurementId: "G-927V1C2G85"
};

//pokretanje firebase aplikacije
firebase.initializeApp(firebaseConfig);

//kreiranje firestore baze
const db = firebase.firestore();