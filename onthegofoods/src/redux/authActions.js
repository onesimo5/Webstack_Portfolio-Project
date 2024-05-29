// actions/authActions.js
import { auth } from '../auth/firebase';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

export const signUp = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = {
      id: userCredential.user.uid,
      email: userCredential.user.email,
      // other user-related fields
    };
    dispatch({ type: 'SIGN_UP_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'SIGN_UP_ERROR', payload: error.message });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = {
      id: userCredential.user.uid,
      email: userCredential.user.email,
      // other user-related fields
    };
    dispatch({ type: 'SIGN_IN_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'SIGN_IN_ERROR', payload: error.message });
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: 'SIGN_OUT_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'SIGN_OUT_ERROR', payload: error.message });
  }
};
