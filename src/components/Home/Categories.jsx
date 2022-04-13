import React from 'react';
import './home.scss';

const Categories = () => {
  return (
    <div className="navigation__categories">
      <div className="navigation__categories_title">Categories</div>
      <button className="navigation__categories_button">
        <i className="fa fa-lock" aria-hidden="true"></i>
        <p className="navigation__categories_button-title">Email adress</p>
      </button>
      <button className="navigation__categories_button">
        <i className="fa fa-key" aria-hidden="true"></i>
        <p className="navigation__categories_button-title">Password</p>
      </button>
      <button className="navigation__categories_button">
        <i className="fa fa-credit-card" aria-hidden="true"></i>
        <p className="navigation__categories_button-title">Credit card</p>
      </button>
    </div>
  );
}

export default Categories;