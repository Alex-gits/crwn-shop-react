import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAryHjUAcNm4ql-8PQ4k3u15QguJrcpRjE",
  authDomain: "crwn-db-4bfcf.firebaseapp.com",
  databaseURL: "https://crwn-db-4bfcf.firebaseio.com",
  projectId: "crwn-db-4bfcf",
  storageBucket: "crwn-db-4bfcf.appspot.com",
  messagingSenderId: "274668590020",
  appId: "1:274668590020:web:ee9b5cc0ff239af89c4a91",
  measurementId: "G-076WHFY0VS"
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
        ...additionalData
      })
    } catch (error) {
      console.log('error while creating a user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;