import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findUser, createCredential, fetchCredentialsData } from '../../gateway/requests';
import Categories from './Categories';
import Modal from '../Modal/Modal';

import './home.scss';
import Content from '../Content/Content';

const HomePage = () => {
  const { userId } = useParams();

  const [user, setUser] = useState([]);
  const [visible, setVisible] = useState(false);
  const [userLists, setUserLists] = useState([]);

  const handleCreateEvent = () => {
    setVisible(true);
  };

  const handleCloseModalEvent = () => {
    setVisible(false);
  };

  useEffect(() => fetchUserInfo(userId), [userId]);
  useEffect(() => fetchTasks(userId), [userId]);

  const fetchTasks = id => {
    fetchCredentialsData(id).then(userList => setUserLists(userList));
  };

  const fetchUserInfo = userId => {
    findUser(userId).then(userData => setUser(userData));
  };

  const handleUserPasswordList = event => {
    setVisible(false);
    createCredential(userId, event).then(() => fetchTasks(userId));
  };

  return (
    <section className="home">
      {visible && <Modal onClose={handleCloseModalEvent} onSubmit={handleUserPasswordList} />}
      <div className="navigation">
        <div className="navigation__contact">
          <img
            className="navigation__contact_img"
            src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg"
            alt="avatar"
          />
          <div className="navigation__contact_name">{user.userName}</div>
        </div>
        <Categories />
      </div>
      <Content onCreate={handleCreateEvent} userLists={userLists} />
      <div className="details"></div>
    </section>
  );
};

export default HomePage;
