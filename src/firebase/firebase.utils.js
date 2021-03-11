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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
