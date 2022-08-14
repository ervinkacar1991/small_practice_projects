import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase-config";
import "./App.css";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {};
  const logout = async () => {};
  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
          placeholder="Email..."
        />
        <input
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
          placeholder="Password..."
        />
        <button onClick={register}>Create User</button>
      </div>
      <div>
        <h3>Login</h3>
        <input
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
          placeholder="Email..."
        />
        <input
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          placeholder="Password..."
        />
        <button>LogIn</button>
      </div>
      <h4>User Logged In:</h4>
      {user.email}
      <button>Sign Out</button>
    </div>
  );
}

export default App;
