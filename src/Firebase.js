import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyAU07bxJ_o4XRDPRGVnPtP_sCe-KsYYz0M",
  authDomain: "itemsvuejs.firebaseapp.com",
  databaseURL: "https://itemsvuejs.firebaseio.com",
  projectId: "itemsvuejs",
  storageBucket: "itemsvuejs.appspot.com",
  messagingSenderId: "998059230346",
  appId: "1:998059230346:web:563971bdaaeb7e3a859973"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;