import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBz8kkLaxS9H3Lctj-fHYgOybAJUh64mho',
  authDomain: 'trello-2.firebaseapp.com',
  databaseURL: 'https://trello-2.firebaseio.com',
  projectId: 'trello-2',
  storageBucket: 'trello-2.appspot.com',
  messagingSenderId: '426008603119',
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
