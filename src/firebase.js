import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAv7LHpbur1lADIPb-gyosASGCz3DQn3EI',
  authDomain: 'react--auth-c714a.firebaseapp.com',
  projectId: 'react--auth-c714a',
  storageBucket: 'react--auth-c714a.appspot.com',
  messagingSenderId: '292970060359',
  appId: '1:292970060359:web:90ed5e8928aec172352f62',
});

export const auth = app.auth();
export default app;
