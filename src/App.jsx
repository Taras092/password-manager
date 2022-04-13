import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreateAccount from './components/LoginPage/CreateAccount';
import Login from './components/LoginPage/Login';
import HomePage from './components/Home/HomePage';
import { createUser, fetchUsersData } from './gateway/requests';
import './common.scss';

const App = () => {
const navigate = useNavigate();

  const fetchUser = (email, password) => {
    fetchUsersData()
      .then(usersData => usersData.find(user => user.email === email && user.password === password))
      .then(userData => navigate(`/home/${userData.id}`));
  }

  const handleSubmit = event => {
    createUser(event).then(userData => navigate(`/home/${userData.id}`));
  };

  const handleLogin = event => {
    const { email, password } = event;
    fetchUser(email, password)
  };

  return (
    <Routes>
      <Route index element={<Login onSubmit={handleLogin} />} />
      <Route path="createAccount" element={<CreateAccount onSubmit={handleSubmit} />} />
      <Route path="home/:userId" element={<HomePage />} />
    </Routes>
  );
};

export default App;