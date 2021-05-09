import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYcD6H9DpcbVzOBaOEo169jwLAEIGUZJA",
    authDomain: "snapchat-clone-e57df.firebaseapp.com",
    projectId: "snapchat-clone-e57df",
    storageBucket: "snapchat-clone-e57df.appspot.com",
    messagingSenderId: "653177893679",
    appId: "1:653177893679:web:25848986b42ef6af32e7da"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };

  
