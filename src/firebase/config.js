import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyCqEyv6Jq4lY1zCpo7EamW83xbzV2cQxXk",
    authDomain: "firegram-photoweb.firebaseapp.com",
    projectId: "firegram-photoweb",
    storageBucket: "firegram-photoweb.appspot.com",
    messagingSenderId: "489222158557",
    appId: "1:489222158557:web:4103c4286357c6d7ce0334"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};
