// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Firestore for data storage
 
// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB3izEp0wPgXU4lvKJzFEGJCXnTUv_nsdk",
  authDomain: "vardaan-46c20.firebaseapp.com",
  projectId: "vardaan-46c20",
  storageBucket: "vardaan-46c20.firebasestorage.app",
  messagingSenderId: "176754382394",
  appId: "1:176754382394:web:3eb91a080ff0b9988cc703",
  measurementId: "G-FBWDNW9VJJ"
};
 
// Initialize Firebase app
const app = initializeApp(firebaseConfig);
 
// Initialize Firestore
const db = getFirestore(app);
 
export { db };  // Export Firestore for use in other components
 
 