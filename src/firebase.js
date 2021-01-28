import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzv6OecSaHVYoV4ztlZqtS3o0h1dR9-WE",
  authDomain: "linkedin-clone-react-redux-fb.firebaseapp.com",
  projectId: "linkedin-clone-react-redux-fb",
  storageBucket: "linkedin-clone-react-redux-fb.appspot.com",
  messagingSenderId: "404884384360",
  appId: "1:404884384360:web:04f5c38da8c02dbda769dd",
  measurementId: "G-FT054YHVYJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
