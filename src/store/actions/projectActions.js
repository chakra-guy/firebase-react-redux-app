const createProject = project => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  firestore.collection('projects').add({
    ...project,
    author: '@imot',
    authorID: 1337,
    createdAt: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATE_PROJECT', payload: project });
  }).catch((err) => {
    dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err });
  });
};

export default createProject;
