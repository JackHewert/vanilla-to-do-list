// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB96jYpw6ukPaQeFiDD9BGCrcMMyDztbDU",
	authDomain: "test-751b7.firebaseapp.com",
	databaseURL: "https://test-751b7-default-rtdb.firebaseio.com",
	projectId: "test-751b7",
	storageBucket: "test-751b7.appspot.com",
	messagingSenderId: "588483897354",
	appId: "1:588483897354:web:05ab180e9c560949f097f3",
	measurementId: "G-25VR5Y2QHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);