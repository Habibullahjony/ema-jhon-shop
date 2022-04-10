// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC1Fj-IsGIEN9IShmXj0KyYrCP0IAZAqAk",
	authDomain: "ema-jhon-simple-99af4.firebaseapp.com",
	projectId: "ema-jhon-simple-99af4",
	storageBucket: "ema-jhon-simple-99af4.appspot.com",
	messagingSenderId: "316124816377",
	appId: "1:316124816377:web:8a8f0c990ff1a5fd09d328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
