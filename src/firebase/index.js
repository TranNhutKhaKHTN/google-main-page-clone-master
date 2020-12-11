import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB2trjB2tfgk-V8TeUTNnNy1QwyewlUXK4",
    authDomain: "main-page-b5c0f.firebaseapp.com",
    databaseURL: "https://main-page-b5c0f.firebaseio.com",
    projectId: "main-page-b5c0f",
    storageBucket: "main-page-b5c0f.appspot.com",
    messagingSenderId: "21146739247",
    appId: "1:21146739247:web:f7b106f2aebb2c0c501cda",
    measurementId: "G-6EWWKJG19H"
});

export { firebaseConfig as firebase };

// < !--The core Firebase JS SDK is always required and must be listed first-- >
// <script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js"></script>

// <!--TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js"></script>

// <script>
//         // Your web app's Firebase configuration
//         // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyB2trjB2tfgk-V8TeUTNnNy1QwyewlUXK4",
//     authDomain: "main-page-b5c0f.firebaseapp.com",
//     databaseURL: "https://main-page-b5c0f.firebaseio.com",
//     projectId: "main-page-b5c0f",
//     storageBucket: "main-page-b5c0f.appspot.com",
//     messagingSenderId: "21146739247",
//     appId: "1:21146739247:web:f7b106f2aebb2c0c501cda",
//     measurementId: "G-6EWWKJG19H"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>