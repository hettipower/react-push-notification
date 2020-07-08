importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyDXBK-_24m0i7jX7w9Tnu-hwblcbGFuRSU",
  authDomain: "react-push-notification-9fb77.firebaseapp.com",
  databaseURL: "https://react-push-notification-9fb77.firebaseio.com",
  projectId: "react-push-notification-9fb77",
  storageBucket: "react-push-notification-9fb77.appspot.com",
  messagingSenderId: "206353928534",
  appId: "1:206353928534:web:6e208590e432d239f946f7",
  measurementId: "G-8MLNNB2H2D"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});