// Imports
const { initializeFirebaseApp,restore } = require('firestore-export-import');
const admin = require('firebase-admin');
const firebaseConfig = require('./firebase-config.js');
const serviceAccount = require('./service-account.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    const appName = 'greenupvermont-de02b'
    initializeFirebaseApp(serviceAccount, firebaseConfig.databaseURL, appName)
    console.log('Firebase Initialized');

    restore('./2021-trashCollectionSties.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();