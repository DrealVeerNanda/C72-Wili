import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCEJv5GeNyvLiuyucuPFs37872inJD0CMM",
    authDomain: "wily-app-c6df4.firebaseapp.com",
    projectId: "wily-app-c6df4",
    storageBucket: "wily-app-c6df4.appspot.com",
    messagingSenderId: "417928819701",
    appId: "1:417928819701:web:363fae3e47d769d98c26bc"
  };

firebase.initializeApp(firebaseConfig); 

export default firebase.firestore();