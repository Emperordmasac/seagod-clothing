import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { promise } from 'q';


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

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }; 
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } , {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);

    }, reject)
  });
}


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });

  export const signInwithGoogle = () => auth.signInWithPopup(googleProvider);


  export default firebase;