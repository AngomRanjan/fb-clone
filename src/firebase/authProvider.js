import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const auth = getAuth();
export const authProvider = new GoogleAuthProvider();

export default authProvider;