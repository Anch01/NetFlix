import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../Firebase/Firebase';
import './Signup.css';

const auth = getAuth(app);

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const createUser = () => {
    setError('');

    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signup successful, do something if needed
        console.log('User signed up successfully:', userCredential.user);
        setSuccessMessage('User signed up successfully! Please login.');
        // Clear the form fields
        setUsername('');
        setEmail('');
        setPassword('');
        // Redirect to the login page
        navigate('/login');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Signup</h2> {/* Added heading */}
      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}
      <label>Username</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
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
      <div className="signup-buttons">
        <button onClick={createUser}>Signup</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Signup;
