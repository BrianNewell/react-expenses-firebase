import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from './firebaseConfig';

firebaseApp.initializeApp(firebaseConfig);

const database = firebaseApp.database();
const googleAuthProvider = new firebaseApp.auth.GoogleAuthProvider();

export { firebaseApp, googleAuthProvider, database as default };