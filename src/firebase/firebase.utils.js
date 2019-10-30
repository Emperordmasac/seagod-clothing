import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBBuXapQYHr8sqxBZsthQ5P2BOt2DkHhEI",
    authDomain: "seagod-db.firebaseapp.com",
    databaseURL: "https://seagod-db.firebaseio.com",
    projectId: "seagod-db",
    storageBucket: "seagod-db.appspot.com",
    messagingSenderId: "1024207332310",
    appId: "1:1024207332310:web:277c5fe796a08844ce3a77",
    measurementId: "G-NQTZP3E3J6"
};

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionData
      })

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

  export const signInwithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;