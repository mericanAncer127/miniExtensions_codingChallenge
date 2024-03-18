// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';
import { /* connectStorageEmulator, */ getStorage } from 'firebase/storage';
// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUx2Ii67qJjEIQoT_XpvJSKeYTdfSep8U",
  authDomain: "test-51072.firebaseapp.com",
  projectId: "test-51072",
  storageBucket: "test-51072.appspot.com",
  messagingSenderId: "616730247907",
  appId: "1:616730247907:web:db2593671207f12b81fbd6",
  measurementId: "G-CCNZF1Y6JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const baseBucketName = 'test-51072';

/* if (isDev) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
} */
