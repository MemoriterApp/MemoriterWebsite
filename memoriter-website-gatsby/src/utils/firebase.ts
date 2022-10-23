//All functions for initializing te database

import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import { Auth, getAuth } from 'firebase/auth';

//configuration and keys to connect to firebase
const firebaseConfig: {apiKey: string, authDomain: string, projectId: string, storageBucket: string, messagingSenderId: string, appId: string, measurementId: string} = {
  apiKey: 'AIzaSyDBXsAk4E47Z9WyZ6__2WQNPnZi0aoWA4Q',
  authDomain: 'memoriter-802b0.firebaseapp.com',
  projectId: 'memoriter-802b0',
  storageBucket: 'memoriter-802b0.appspot.com',
  messagingSenderId: '7107097450',
  appId: '1:7107097450:web:5352b9a5f9abf638e76b13',
  measurementId:' G-JES49GGH5N'
};

//variables to set up the different firebase features
const app: FirebaseApp = initializeApp(firebaseConfig); //firebase app initialization
const db: Firestore = getFirestore(app); //database initialization
const auth: Auth = getAuth(app); //authentication initialization

//export database functions
export const firebase: {app: FirebaseApp, db: Firestore, auth: Auth} = {
  app,
  db,
  auth
};