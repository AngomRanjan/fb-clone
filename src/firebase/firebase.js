// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const postCol = collection(db, 'posts');
export const getPostsQuery = query(postCol, orderBy('timestamp', 'desc'));
export const auth = getAuth();
export const authProvider = new GoogleAuthProvider();

export const addPosts = async ({message, profilePic, username, image}) => {
  const docRef = await addDoc(postCol, {
    message,
    timestamp: serverTimestamp(),
    profilePic,
    username,
    image,
  });
  console.log("Document written with ID: ", docRef.id);
};

export default getPostsQuery;
 