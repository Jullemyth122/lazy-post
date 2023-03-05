// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth ,GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider,GithubAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_ANALYTICS_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_ANALYTICS_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_ANALYTICS_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_ANALYTICS_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_ANALYTICS_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_ANALYTICS_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const authentication = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const twitter = new TwitterAuthProvider();
export const github = new GithubAuthProvider();
