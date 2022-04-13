import React, { useState } from 'react';
import './modal.scss';

const Modal = ({ onClose, onSubmit }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    title: '',
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
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onClose}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              className="event-form__field"
              type="text"
              id="title"
              name="title"
              placeholder="Site title"
              onChange={handleChange}
              value={state.title}
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              className="event-form__field"
              onChange={handleChange}
              value={state.email}
            />
            <input
              className="event-form__field"
              type="password"
              placeholder="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={state.password}
            />
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
