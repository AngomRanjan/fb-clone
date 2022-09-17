// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy } from 'firebase/firestore/lite';
import firebaseConfig from './firebaseConfig';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const postCol = collection(db, 'posts');
export const getPostsQuery = query(postCol, orderBy('timestamp', 'desc'));
export const auth = getAuth();
export const authProvider = new GoogleAuthProvider();

export default getPostsQuery;
 