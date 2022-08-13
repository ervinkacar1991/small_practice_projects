import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstName = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  return (
    <div class="form-container">
      <form class="register-form">
        <input
          onChange={handleFirstName}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        <input
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        <input
          onChange={handleEmail}
          value={values.emai}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
