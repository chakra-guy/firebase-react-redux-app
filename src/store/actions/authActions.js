export const signUp = newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
  const { email, password, firstName, lastName } = newUser;
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => firestore.collection('users').doc(response.user.uid).set({
      firstName,
      lastName,
      initials: firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase(),
    }))
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    })
    .catch((error) => {
      dispatch({ type: 'SIGNUP_ERROR', error });
    });
};

export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch(() => {
      dispatch({ type: 'LOGIN_ERROR' });
    });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase.auth().signOut()
    .then(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
    }).catch(() => {
      dispatch({ type: 'LOGOUT_ERROR' });
    });
};
