import React, { useState } from "react";

const FormValidation = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    // Validate username
    if (username === "") {
      setErrorUserName("Please fill out the username field");
      setUserColor("border-red-500");
      valid = false;
    } else if (username.length < 8) {
      setErrorUserName("Username must be at least 8 characters long");
      setUserColor("border-red-500");
      valid = false;
    } else {
      setErrorUserName("");
      setUserColor("border-green-500");
    }

    // Validate email
    if (email === "") {
      setErrorEmail("Please fill out the email field");
      setEmailColor("border-red-500");
      valid = false;
    } else if (!email.includes("@gmail")) {
      setErrorEmail("Email must be a valid Gmail address");
      setEmailColor("border-red-500");
      valid = false;
    } else {
      setErrorEmail("");
      setEmailColor("border-green-500");
    }

    // Validate password
    if (password === "") {
      setErrorPassword("Please fill out the password field");
      setPasswordColor("border-red-500");
      valid = false;
    } else if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long");
      setPasswordColor("border-red-500");
      valid = false;
    } else {
      setErrorPassword("");
      setPasswordColor("border-green-500");
    }

    // Validate confirm password
    if (confirmPassword === "") {
      setErrorConfirmPassword("Please confirm your password");
      setConfirmPasswordColor("border-red-500");
      valid = false;
    } else if (confirmPassword !== password) {
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("border-red-500");
      valid = false;
    } else {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("border-green-500");
    }

    // Show success alert only if the form is valid
    if (valid) {
      alert("Form submitted successfully!");
      // Reset form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorUserName("");
      setErrorEmail("");
      setErrorPassword("");
      setErrorConfirmPassword("");
      setUserColor("");
      setEmailColor("");
      setPasswordColor("");
      setConfirmPasswordColor("");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-yellow-100 to-pink-400 flex justify-center items-center">
      <div className="bg-teal-50 grid grid-cols-2 w-[50rem] h-[30rem] shadow-md">
        {/* Left Image Section */}
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
          }}
        ></div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center bg-white p-6"
        >
          {/* Username Input */}
          <input
            type="text"
            placeholder="Name"
            className={`w-80 p-2 mb-2 border-b focus:outline-none ${userColor}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errorUserName && (
            <p className="text-red-500 text-sm">{errorUserName}</p>
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className={`w-80 p-2 mb-2 border-b focus:outline-none ${emailColor}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && <p className="text-red-500 text-sm">{errorEmail}</p>}

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className={`w-80 p-2 mb-2 border-b focus:outline-none ${passwordColor}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && (
            <p className="text-red-500 text-sm">{errorPassword}</p>
          )}

          {/* Confirm Password Input */}
          <input
            type="password"
            placeholder="Confirm Password"
            className={`w-80 p-2 mb-2 border-b focus:outline-none ${confirmPasswordColor}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorConfirmPassword && (
            <p className="text-red-500 text-sm">{errorConfirmPassword}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-4/5 mt-4 px-4 py-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
