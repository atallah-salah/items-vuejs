import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAU07bxJ_o4XRDPRGVnPtP_sCe-KsYYz0M",
  authDomain: "itemsvuejs.firebaseapp.com",
  databaseURL: "https://itemsvuejs.firebaseio.com",
  projectId: "itemsvuejs",
  storageBucket: "itemsvuejs.appspot.com",
  messagingSenderId: "998059230346",
  appId: "1:998059230346:web:563971bdaaeb7e3a859973"
};

const database = firebase.initializeApp(config)

export default database;