import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDy-kj6vNFxiWnHJ5x15QuGK0hv2hT6Cb4",
  authDomain: "words-ad959.firebaseapp.com",
  databaseURL: "https://words-ad959.firebaseio.com",
  projectId: "words-ad959",
  storageBucket: "",
  messagingSenderId: "439106278827"
};

const fire = firebase.initializeApp(config);

export default fire;
