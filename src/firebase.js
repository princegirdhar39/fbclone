import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBqR2D062iiaG7QsGdkzuE3Vxo5tILVnLw",
    authDomain: "facebook-clone-d82a8.firebaseapp.com",
    projectId: "facebook-clone-d82a8",
    storageBucket: "facebook-clone-d82a8.appspot.com",
    messagingSenderId: "72943392303",
    appId: "1:72943392303:web:499adeb2a7a9960b6798da",
    measurementId: "G-N4HM7Q23T2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth,provider };
  export default db;