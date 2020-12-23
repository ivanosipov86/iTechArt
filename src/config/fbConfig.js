import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCrllm8sNNLL_xousFt_Upvfv-2KyS3slI",
  authDomain: "testproject-ddd26.firebaseapp.com",
  databaseURL: "https://testproject-ddd26.firebaseio.com",
  projectId: "testproject-ddd26",
  storageBucket: "testproject-ddd26.appspot.com",
  messagingSenderId: "973704257698",
  appId: "1:973704257698:web:b30f75887e564e9865b7fb"
});

const db = firebase.database()

export default db;



