import React from 'react';
import PropTypes from 'prop-types';

import ConnectPage from '../ConnectPage/ConnectPage';

import { useDisconnectReason } from '../../components/ConnectionError';
import useToggle from '../../hooks/useToggle';

import MenuIcon from './Menu.svg';

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
        <div className="flex flex-col md:flex-row md:justify-between items-center my-6 mx-4">
          <div className="w-full flex-grow md:w-max md:flex-grow-0 flex flex-row justify-between">
            <button type="button" onClick={toggleIsMenuOpen}>
              <img src={MenuIcon} alt="Menu" className="w-6 md:hidden" />
            </button>
            <a href="/" className="flex-grow flex flex-row justify-center">
              <div className="uppercase font-bold">HealthWallet</div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col min-h-full">{children}</div>

      <div className="bg-black">
        <div className="flex justify-center items-center my-4">
          <div className="uppercase font-bold">HealthWallet</div>
        </div>
      </div>
    </div>
  );
};

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageBase;
