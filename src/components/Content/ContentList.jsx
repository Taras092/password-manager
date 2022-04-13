import React from 'react';
import './content.scss';

const Contentlist = ({ usersList }) => {
  return (
    <ul className="content__list">
      {usersList.map(list => (
        <li className="content__list-item">
          <img
            className="content__list-item_img"
            src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg"
            alt=""
          />
          <div className="content__list-item_description">
            <div>email</div>
            <div>password</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Contentlist;
