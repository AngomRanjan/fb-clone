// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy } from 'firebase/firestore/lite';
import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const postCol = collection(db, 'posts');
export const postColQuery = query(postCol, orderBy('timestamp', 'desc'));

export default getPostsQuery;
 