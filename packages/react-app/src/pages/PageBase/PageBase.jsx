import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import ConnectPage from '../ConnectPage/ConnectPage';

import { useDisconnectReason } from '../../components/ConnectionError';
import useToggle from '../../hooks/useToggle';

import MenuIcon from './assets/Menu.svg';
import Guardians from './assets/Guardians.svg';

const PageBase = ({ children }) => {
  const disconnectReason = useDisconnectReason();

  // eslint-disable-next-line no-unused-vars
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  if (disconnectReason) {
    return <ConnectPage disconnectReason={disconnectReason} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-6">
          <div className="w-full flex-grow md:w-max md:flex-grow-0 flex flex-row justify-between px-6">
            <button type="button" onClick={toggleIsMenuOpen}>
              <img src={MenuIcon} alt="Menu" />
            </button>
            <Link to="/guardians">
              <img src={Guardians} alt="Guardians" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col min-h-full">{children}</div>
    </div>
  );
};

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageBase;
