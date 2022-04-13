import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findUser, updateUser } from '../../gateway/requests';
import Categories from './Categories';
import Modal from '../Modal/Modal';

import './home.scss';
import Content from '../Content/Content';

const HomePage = () => {
  const { userId } = useParams();

  const [user, setUser] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleCreateEvent = () => {
    setVisible(true);
  };

  const handleCloseModalEvent = () => {
    setVisible(false);
  };


  useEffect(() => fetchUserInfo(userId), [userId]);

  const fetchUserInfo = userId => {
    findUser(userId).then(userData => setUser(userData));
  };

  const handleUserPasswordList = event => {
    setVisible(false);
    const newUser = {
      listPassword: [event],
    }
    updateUser(userId, newUser).then((userData) => console.log(userData))
  }

  return (
    <section className="home">
      {visible && <Modal onClose={handleCloseModalEvent} onSubmit={handleUserPasswordList}/>}
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
      <Content onCreate={handleCreateEvent}/>
      <div className="details"></div>
    </section>
  );
};

export default HomePage;