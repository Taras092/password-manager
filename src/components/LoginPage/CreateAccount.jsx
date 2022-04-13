import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './createAccount.scss';

const CreateAccount = ({ onSubmit }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <section className="create-account">
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="11111@win.com"
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
            type="password"
            id="password"
            name="password"
            placeholder="******"
            onChange={handleChange}
            value={state.password}
            required
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="userName">
            User Name
          </label>
          <input
            className="form-input"
            type="text"
            id="userName"
            name="userName"
            onChange={handleChange}
            value={state.userName}
            required
          />
        </div>
        <button className="create-button" type="submit">
          Create account
        </button>
      </form>
    </section>
  );
};

export default CreateAccount;
