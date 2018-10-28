const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https
  .onRequest((request, response) => {
    response.send('Szia Alexa! ~from firebase cloud function');
  });

const createNotification = notification => admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => console.log('notifications has been added', doc));

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: ' add a new project',
      user: project.author,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

exports.userCreated = functions.auth.user()
  .onCreate(user => admin.firestore().collection('users').doc(user.uid).get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: ' just signed up',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };
      return createNotification(notification);
    }) //eslint-disable-line
  );
