import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDm0psiJHicxf3hX70vnQZL24URst8icGY",
    authDomain: "dee-db.firebaseapp.com",
    databaseURL: "https://dee-db.firebaseio.com",
    projectId: "dee-db",
    storageBucket: "dee-db.appspot.com",
    messagingSenderId: "368449785255",
    appId: "1:368449785255:web:d728724f5a4fee93a93a82"
  };

  export const createUserProfileDocument = async ( userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = Date.now();

          try{
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...additionalData
             })
          }catch(e){
            console.log('Error creating a user ', e.message);
          }
      }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
