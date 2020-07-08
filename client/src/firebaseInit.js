import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyDXBK-_24m0i7jX7w9Tnu-hwblcbGFuRSU",
    authDomain: "react-push-notification-9fb77.firebaseapp.com",
    databaseURL: "https://react-push-notification-9fb77.firebaseio.com",
    projectId: "react-push-notification-9fb77",
    storageBucket: "react-push-notification-9fb77.appspot.com",
    messagingSenderId: "206353928534",
    appId: "1:206353928534:web:6e208590e432d239f946f7"
};


firebase.initializeApp(config);
const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
    new Promise((resolve, reject) => {
        messaging
        .requestPermission()
        .then(() => messaging.getToken())
        .then((firebaseToken) => {
            resolve(firebaseToken);
        })
        .catch((err) => {
            reject(err);
        });
    });

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });