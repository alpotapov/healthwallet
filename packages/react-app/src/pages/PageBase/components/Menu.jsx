/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './styles.module.css';

import Logo from '../assets/Logo.png';
import Close from '../assets/Close.svg';
import FirstAid from '../assets/First-aid.svg';
import Key from '../assets/Key.svg';
import Shield from '../assets/Shield.svg';

const Menu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`modal ${css.modal_background} ${isOpen ? 'modal-open' : ''}`}
      onClick={onClose}
    >
      <div
        className="modal-box max-w-xs h-full bg-minsk p-8 ml-auto mb-auto rounded-l-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-20">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <button type="button" onClick={onClose}>
            <img src={Close} alt="Close" className="w-4 h-4" />
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center pb-16"
            onClick={onClose}
          >
            <div className="pr-6">
              <img src={FirstAid} alt="FirstAid" />
            </div>
            <div>
              <Link to="/" className="text-xl">
                Medical History
              </Link>
            </div>
          </button>
          <button
            type="button"
            className="flex items-center pb-16"
            onClick={onClose}
          >
            <div className="pr-6">
              <img src={Key} alt="FirstAid" />
            </div>
            <div>
              <Link to="/preservation" className="text-xl">
                Data preservation
              </Link>
            </div>
          </button>
          <button
            type="button"
            className="flex items-center pb-16"
            onClick={onClose}
          >
            <div className="pr-6">
              <img src={Shield} alt="FirstAid" />
            </div>
            <div>
              <Link to="/guardians" className="text-xl">
                Guardians
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Menu;
