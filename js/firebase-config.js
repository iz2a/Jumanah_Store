// ==================== FIREBASE CONFIGURATION ====================

console.log('🔥 Loading Firebase Configuration...');

// Import Firebase modules from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    where, 
    orderBy, 
    serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66LAulSUGpqUJoDLn30n0OYEJ5n9P5Tw",
  authDomain: "jumanah-store.firebaseapp.com",
  projectId: "jumanah-store",
  storageBucket: "jumanah-store.firebasestorage.app",
  messagingSenderId: "742919394601",
  appId: "1:742919394601:web:20008ab693a465a5fc1338"
};

console.log('⚙️ Initializing Firebase with config:', firebaseConfig.projectId);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

console.log('✅ Firebase App initialized');
console.log('✅ Firestore initialized');

// Export for use in other files
window.firebaseDb = db;
window.firebaseCollection = collection;
window.firebaseAddDoc = addDoc;
window.firebaseGetDocs = getDocs;
window.firebaseQuery = query;
window.firebaseWhere = where;
window.firebaseOrderBy = orderBy;
window.firebaseServerTimestamp = serverTimestamp;

console.log('✅ Firebase functions exported to window object');
console.log('🔥 Firebase ready for use!');

// Test Firebase connection
setTimeout(async () => {
    try {
        console.log('🧪 Testing Firebase connection...');
        const testCollection = collection(db, 'reviews');
        const testQuery = query(testCollection, where('productId', '==', 'test'));
        await getDocs(testQuery);
        console.log('✅ Firebase connection test successful!');
    } catch (error) {
        console.error('❌ Firebase connection test failed:', error);
    }
}, 1000);
