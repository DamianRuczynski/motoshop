// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQmDIrLxytF3DFUy7PEUVrrElHP12i-R4',
  authDomain: 'motoshop-1633865562344.firebaseapp.com',
  projectId: 'motoshop-1633865562344',
  storageBucket: 'motoshop-1633865562344.appspot.com',
  messagingSenderId: '507876276256',
  appId: '1:507876276256:web:7b58bd4e221cb308b26445',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
