import firebase from 'firebase/app';
import auth from 'firebase/auth';
import firestore from 'firebase/firestore';
import database from 'firebase/database';
import storage from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIRE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIRE_APP_ID,
  measurementId: process.env.REACT_APP_FIRE_MEASURE_ID
};

firebase.initializeApp(firebaseConfig);

const realdb = firebase.database();
const cloudb = firebase.firestore();
const bucket = firebase.storage();
const authToken = firebase.auth();

if(window.location.hostname === 'localhost'){
	console.log('Testing Firebase Emulator !');
  authToken.useEmulator('http://localhost:9099');
  realdb.useEmulator('localhost', 9000);
  cloudb.useEmulator('localhost', 8082);
	bucket.useEmulator('localhost', 9199);
}

export { realdb, cloudb, bucket, authToken };