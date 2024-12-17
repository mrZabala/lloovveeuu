"use strict";

var _app = require("firebase/app");

var _analytics = require("firebase/analytics");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC8yR5yGa3_sUi9z2nWh7jooEoZK79vgTc",
  authDomain: "mylove-e79a9.firebaseapp.com",
  projectId: "mylove-e79a9",
  storageBucket: "mylove-e79a9.firebasestorage.app",
  messagingSenderId: "794741455085",
  appId: "1:794741455085:web:d837521c44710b528ff4e4",
  measurementId: "G-XM4TESVNMW"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var analytics = (0, _analytics.getAnalytics)(app);
//# sourceMappingURL=firebase.dev.js.map
