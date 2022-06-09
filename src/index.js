import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './components/store/cart-context';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA79plhaz2W9orJefDsEReX3n13DGlyH2U",
  authDomain: "intrepid-vista-332001.firebaseapp.com",
  projectId: "intrepid-vista-332001",
  storageBucket: "intrepid-vista-332001.appspot.com",
  messagingSenderId: "1019353502168",
  appId: "1:1019353502168:web:fc16ea34176d545c6522ad",
  measurementId: "G-CKG7E29B1Y"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
