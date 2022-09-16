import { auth, authProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

const SET_USER = 'SET_USER';
const initialState = {};

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const setUserAction = () => async (dispatch) => {
  await signInWithPopup(auth, authProvider)
    .then(result => {
      dispatch(setUser(result.user))
    }).catch(error => alert("error.message"));
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export default authReducer;
