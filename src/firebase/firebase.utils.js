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

  const userRef = firestore.doc(`users/${userAuth.uid}`); // Ссылка на путь к объекту внутри Фаербейс

  const snapShot = await userRef.get(); // Получаем данные по указанной выше ссылке. Если юзер новый, то данных у него не будет, то есть снепшот вернет нулл (или типо того)

  // проверяем, если у нас уже такой юзер (то есть чекам, есть ли у него данные). snapShot.exists сразу указывает, есть ли какие-то данные по ссылке. Если юзера нет (нет снепшота), то мы создаем в базе даных нового юзера по указанному референсу с 3 полями. Через .set()

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