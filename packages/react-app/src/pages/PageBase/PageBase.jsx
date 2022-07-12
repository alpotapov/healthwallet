import React from 'react';
import PropTypes from 'prop-types';

import ConnectPage from '../ConnectPage/ConnectPage';

import { useDisconnectReason } from '../../components/ConnectionError';
import WalletConnection from '../../components/WalletConnection/WalletConnection';
import useToggle from '../../hooks/useToggle';

import logo from '../../assets/logo.svg';
import FooterLogo from './FooterLogo.svg';
import MenuIcon from './Menu.svg';

const PageBase = ({ children }) => {
  const disconnectReason = useDisconnectReason();

  const [toggleIsMenuOpen] = useToggle(false);

  if (disconnectReason) {
    return <ConnectPage disconnectReason={disconnectReason} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center my-6 mx-4">
          <div className="w-full flex-grow md:w-max md:flex-grow-0 flex flex-row justify-between">
            <button type="button" onClick={toggleIsMenuOpen}>
              <img src={MenuIcon} alt="Menu" className="w-8 md:hidden" />
            </button>
            <a href="/" className="flex-grow flex flex-row justify-center">
              <img src={logo} alt="Polynom logo" />
            </a>
          </div>
          <div className="mt-4 ml-8 md:mt-0 md:mr-0">
            <WalletConnection />
          </div>
        </div>
      </div>

      <div className="border border-black h-0 w-full" />

      <div className="flex-grow flex flex-col min-h-full">{children}</div>

      <div className="bg-black">
        <div className="flex justify-center items-center my-4">
          <img src={FooterLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageBase;
