import React, { useState } from "react";
import "./App.css";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const register = async () => {};
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
        <button>Create User</button>
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
      <button>Sign Out</button>
    </div>
  );
}

export default App;
