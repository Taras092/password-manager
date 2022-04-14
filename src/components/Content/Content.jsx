import React, { useState, useEffect } from 'react';
import Contentlist from './ContentList';
import { fetchCredentialsData } from '../../gateway/requests';
import './content.scss';

const Content = ({ onCreate, userLists }) => {
  return (
    <div className="content">
      <div className="content__password">
        <span className="content__password_count">5</span>
        <input className="content__password_search" type="text" />
        <button className="content__password_btn btn" onClick={onCreate}>
          Create
        </button>
      </div>
      <Contentlist userLists={userLists} />
    </div>
  );
};

export default Content;
