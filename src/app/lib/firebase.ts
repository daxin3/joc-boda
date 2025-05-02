// lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase (pon aquí tus valores reales)
const firebaseConfig = {
    apiKey: "AIzaSyCqiHuMxP2-mpN6T3_I3XCx3E_NtYkGzPA",
    authDomain: "testing-4fbad.firebaseapp.com",
    databaseURL: "https://testing-4fbad-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testing-4fbad",
    storageBucket: "testing-4fbad.firebasestorage.app",
    messagingSenderId: "6733545514",
    appId: "1:6733545514:web:4520cefcdf05999c8e0353"
  };

// Inicializa la app solo una vez
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Obtén Firestore
const db = getFirestore(app);

export { db };
