import firebase from 'firebase'

// Configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhYyyTts6Y4gnfru9kRZVCGTLOZxIP-zM",
    authDomain: "expensify-d5d39.firebaseapp.com",
    databaseURL: "https://expensify-d5d39-default-rtdb.firebaseio.com",
    projectId: "expensify-d5d39",
    storageBucket: "expensify-d5d39.appspot.com",
    messagingSenderId: "894107324779",
    appId: "1:894107324779:web:a4146627760cf99996fc2e",
    measurementId: "G-CNWXSTBSZ8"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database()
var provider = new firebase.auth.GoogleAuthProvider();

export { firebase, provider, database as default}