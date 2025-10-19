// ==================== FIREBASE CONFIGURATION ====================

// Import Firebase modules from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, limit, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66LAulSUGpqUJoDLn30n0OYEJ5n9P5Tw",
  authDomain: "jumanah-store.firebaseapp.com",
  projectId: "jumanah-store",
  storageBucket: "jumanah-store.firebasestorage.app",
  messagingSenderId: "742919394601",
  appId: "1:742919394601:web:20008ab693a465a5fc1338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export for use in other files
export { db, collection, addDoc, getDocs, query, where, orderBy, limit, serverTimestamp };

console.log('✅ Firebase initialized successfully');
