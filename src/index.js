import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase/compat/app");
require("../node_modules/firebase/firebase-firestore-compat");

firebase.initializeApp({
  apiKey: "AIzaSyBNO5n7ud_5LZIOYi7Hk1kiXB5UR3w9QMU",
  authDomain: "evernote-b1ac8.firebaseapp.com",
  projectId: "evernote-b1ac8",
  storageBucket: "evernote-b1ac8.appspot.com",
  messagingSenderId: "880090049598",
  appId: "1:880090049598:web:0cd67ade8c356a13cf356f",
  measurementId: "G-CG5S7G2DTV",
});

ReactDOM.render(<App />, document.getElementById("evernote-container"));

serviceWorker.unregister();
