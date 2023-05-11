import firebase from 'firebase'

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPGmDRKJ8oTtWlprxVJZxTa5_H74Wf3Bo",
    authDomain: "reactnative-instagram-cl-65a20.firebaseapp.com",
    projectId: "reactnative-instagram-cl-65a20",
    storageBucket: "reactnative-instagram-cl-65a20.appspot.com",
    messagingSenderId: "4583360531",
    appId: "1:4583360531:web:702825f27c233f525a17e6"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
