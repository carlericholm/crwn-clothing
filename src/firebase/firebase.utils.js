import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBlGxWGOXNIhJ4vDLWy8bv0xEWkwHtLowM',
  authDomain: 'crwn-db-9354f.firebaseapp.com',
  projectId: 'crwn-db-9354f',
  storageBucket: 'crwn-db-9354f.appspot.com',
  messagingSenderId: '841084362259',
  appId: '1:841084362259:web:7c0e77bff770d7da4529e6',
  measurementId: 'G-HJQFZ2G5Y8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
