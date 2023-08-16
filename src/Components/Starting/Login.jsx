import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase/Firebase";
import "./Login.css";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 

  const navigate = useNavigate();

  const loginUser = () => {
    setError("");
    setSuccessMessage(""); 

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in successfully:", userCredential.user);

        navigate("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="login-buttons">
        <button onClick={loginUser}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
