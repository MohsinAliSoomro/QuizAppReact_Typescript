import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBssBOwPrr7tyG3DK5r4jsguO95x5hlIs",
  authDomain: "pushnotification-36bfa.firebaseapp.com",
  databaseURL: "https://pushnotification-36bfa.firebaseio.com",
  projectId: "pushnotification-36bfa",
  storageBucket: "pushnotification-36bfa.appspot.com",
  messagingSenderId: "309907246222",
  appId: "1:309907246222:web:e074739c8d10f7b7b70ddf",
};

firebase.initializeApp(firebaseConfig);
export const messaging = firebase.messaging();

