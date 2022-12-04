import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv1yDesztHaCc1q63HyIpHMeZOztsTTw4",
    authDomain: "clone-23b1c.firebaseapp.com",
    databaseURL: "https://clone-23b1c-default-rtdb.firebaseio.com",
    projectId: "clone-23b1c",
    storageBucket: "clone-23b1c.appspot.com",
    messagingSenderId: "708249502386",
    appId: "1:708249502386:web:3455c554238cea3a08ffab",
    measurementId: "G-R9BYKCDJPN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };