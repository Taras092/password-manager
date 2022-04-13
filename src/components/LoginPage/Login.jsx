import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = ({ onSubmit }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleVisible = event => {
    let x = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleLogin = event => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <div className="page">
      <div className="login">
        <form className="login-form" onSubmit={handleLogin}>
          <h1 className="form-title">Password messanger</h1>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="ukraine@win.com"
              onChange={handleChange}
              value={state.email}
              required
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type='password'
              id="password"
              name="password"
              placeholder="******"
              onChange={handleChange}
              value={state.password}
              required
            />
            <button className="password-button" onClick={handleVisible}>
              <i className="fa fa-eye form-icon" id="icon" aria-hidden="true"></i>
            </button>
          </div>
          <button className="sign-button button" type="submit">
            Sign Up
          </button>
          <Link to="/createAccount">
            <button className="create-button button" type="submit">
              Create account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
