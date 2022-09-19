import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAZFKEFtmO-0ChPaC2qmb2K_tSVVIx3_Xc",
  authDomain: "pro-75-5c9d5.firebaseapp.com",
  projectId: "pro-75-5c9d5",
  storageBucket: "pro-75-5c9d5.appspot.com",
  messagingSenderId: "1048495667300",
  appId: "1:1048495667300:web:581588894fe8f41e148771"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
