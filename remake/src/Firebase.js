import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC11RCe_iwp1wWRCRj9gaG5aFeHGW4-VBE",
  authDomain: "lifeline-2badd.firebaseapp.com",
  databaseURL: "https://lifeline-2badd.firebaseio.com",
  projectId: "lifeline-2badd",
  storageBucket: "lifeline-2badd.appspot.com",
  messagingSenderId: "310718363903",
  appId: "1:310718363903:web:faee995f0704f73baaf4ca",
  measurementId: "G-DBG396HKJW"
};
  export default firebase

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();