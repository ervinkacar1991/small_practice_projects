import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASfKE3Wtfkn9YwcJ1UhWBB-rLoezK87Es",
  authDomain: "auth-app-dc5f6.firebaseapp.com",
  projectId: "auth-app-dc5f6",
  storageBucket: "auth-app-dc5f6.appspot.com",
  messagingSenderId: "480436876955",
  appId: "1:480436876955:web:cc3341e978350fff7c783e",
  measurementId: "G-ZGCLP2V0BV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
