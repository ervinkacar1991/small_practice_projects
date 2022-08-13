import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstName = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* {submitted ? (
          <div className="success-message">
            Succes! Thank you for registering
          </div>
        ) : null} */}
        {submitted && valid ? (
          <div className="success-message">
            Succes! Thank you for registering
          </div>
        ) : null}
        <input
          onChange={handleFirstName}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span>Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span>Please enter a last name</span>
        ) : null}
        <input
          onChange={handleEmail}
          value={values.emai}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter a email</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
