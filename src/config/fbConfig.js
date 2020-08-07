import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBFae7aPlSG5plYArmTpiVpgA5o8TG0SqU",
    authDomain: "planner-app-f0009.firebaseapp.com",
    databaseURL: "https://planner-app-f0009.firebaseio.com",
    projectId: "planner-app-f0009",
    storageBucket: "planner-app-f0009.appspot.com",
    messagingSenderId: "294771646278",
    appId: "1:294771646278:web:722b43faeec8f5a9f20f47",
    measurementId: "G-K24LWJ8D9T"
  };
  firebase.initializeApp(firebaseConfig)

export default firebase