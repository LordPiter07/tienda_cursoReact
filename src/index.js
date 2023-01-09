import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMPb7STj8TgVhKDq2PkDjDh5WUt_g96Jg",
  authDomain: "tienda-de-padel.firebaseapp.com",
  projectId: "tienda-de-padel",
  storageBucket: "tienda-de-padel.appspot.com",
  messagingSenderId: "811027713439",
  appId: "1:811027713439:web:4f83f138aa337c4b6bc1aa"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


