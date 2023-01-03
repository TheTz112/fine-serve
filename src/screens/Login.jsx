import React, { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="login-con">
      <div className="login-left">
        <img src="/images/login.png" alt="login" />
      </div>
      <div className="login-right">
        <h2>Email Address</h2>
        <input
          type="username"
          placeholder="example@gmail.com"
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type={passwordShown ? 'text' : 'password'}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={togglePassword} className="show-password">
          <AiFillEyeInvisible />
        </button>
        <p className="forgot">Forgotten Password</p>
        <button type="submit" className="login-btn">
          Log in
        </button>
        <p className="dont-have-acc">
          Don't have an account?
          <Link to={'/Register'}>
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
