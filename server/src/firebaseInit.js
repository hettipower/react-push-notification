import admin from 'firebase-admin';

import { googleApplicationCredentials } from './settings'

const serviceAccount = require('../react-push-notification-9fb77-firebase-adminsdk-gbnyb-8e26b58fca.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-push-notification-9fb77.firebaseio.com'
});

export const messaging = admin.messaging();