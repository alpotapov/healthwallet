import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import ConnectPage from '../ConnectPage/ConnectPage';

import { useDisconnectReason } from '../../components/ConnectionError';
import useToggle from '../../hooks/useToggle';

import MenuIcon from './assets/Menu.svg';
import Logo from './assets/Logo.png';
import Back from './assets/buttonBack.svg';

const PageBase = ({ children, buttonBack, backLink, footer }) => {
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
          {buttonBack ? (
            <div className="w-full flex justify-between px-6">
              <div>
                <Link to={backLink}>
                  <img src={Back} alt="buttonBack" />
                </Link>
              </div>
              <button type="button" onClick={toggleIsMenuOpen}>
                <img src={MenuIcon} alt="Menu" />
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-end px-6">
              <button type="button" onClick={toggleIsMenuOpen}>
                <img src={MenuIcon} alt="Menu" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow flex flex-col min-h-full">{children}</div>

      {footer ? (
        <div className="flex items-center justify-center pb-6">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
  buttonBack: PropTypes.bool,
  backLink: PropTypes.string,
  footer: PropTypes.bool,
};

PageBase.defaultProps = {
  buttonBack: false,
  backLink: '',
  footer: false,
};

export default PageBase;
