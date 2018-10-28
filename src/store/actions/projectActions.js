const createProject = project => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const { profile } = getState().firebase;
  const { uid } = getState().firebase.auth;

  firestore.collection('projects').add({
    ...project,
    author: `${profile.firstName} ${profile.lastName}`,
    authorID: uid,
    createdAt: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATE_PROJECT', payload: project });
  }).catch((err) => {
    dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err });
  });
};

export default createProject;
