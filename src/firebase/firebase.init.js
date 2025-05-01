import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGzNTzI8O-bui_YhOJaFIrqexxpEFr6AQ',
  authDomain: 'dragon-news-95b65.firebaseapp.com',
  projectId: 'dragon-news-95b65',
  storageBucket: 'dragon-news-95b65.firebasestorage.app',
  messagingSenderId: '409540756878',
  appId: '1:409540756878:web:f346fd7ee04befba2390df',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
