  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAiICIMYV9xA-i6MnKA9wf4R3ste37w59A",
    authDomain: "todo-app-79a73.firebaseapp.com",
    projectId: "todo-app-79a73",
    storageBucket: "todo-app-79a73.appspot.com",
    messagingSenderId: "283791452186",
    appId: "1:283791452186:web:6b8342dc3b8b9d7d2fc9a3",
    measurementId: "G-5XRG0Y4TBV"
  });

  const db = firebaseApp.firestore();
  
  export default db;