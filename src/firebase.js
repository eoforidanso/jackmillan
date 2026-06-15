import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyABHC2okBdOa0QPr8nH93W1AniBTiAaTRk",
  authDomain: "jackmillansc.firebaseapp.com",
  projectId: "jackmillansc",
  storageBucket: "jackmillansc.firebasestorage.app",
  messagingSenderId: "100692166243",
  appId: "1:100692166243:web:ad2912cf002c34c7d81a56",
  measurementId: "G-TMELKPGD6F",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
