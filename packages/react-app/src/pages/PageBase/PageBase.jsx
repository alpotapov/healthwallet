import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import ConnectPage from '../ConnectPage/ConnectPage';

import { useDisconnectReason } from '../../components/ConnectionError';
import Menu from './components/Menu';

import MenuIcon from './assets/Menu.svg';
import Logo from './assets/Logo.png';
import Back from './assets/buttonBack.svg';

const PageBase = ({ children, buttonBack, backLink, footer }) => {
  const disconnectReason = useDisconnectReason();

  const [menuModalOpen, setMenuModalOpen] = React.useState(false);

  if (disconnectReason) {
    return <ConnectPage disconnectReason={disconnectReason} />;
  }

  return (
    <div className="mockup-phone">
      <div className="camera" />
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <div className="flex min-h-full flex-col">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row md:justify-between items-center mt-6">
                <Menu
                  onClose={() => {
                    setMenuModalOpen(false);
                  }}
                  isOpen={menuModalOpen}
                />
                {buttonBack ? (
                  <div className="w-full flex justify-between px-6">
                    <div>
                      <Link to={backLink}>
                        <img src={Back} alt="buttonBack" />
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setMenuModalOpen(true);
                      }}
                    >
                      <img src={MenuIcon} alt="Menu" />
                    </button>
                  </div>
                ) : (
                  <div className="w-full flex justify-end px-6">
                    <button
                      type="button"
                      onClick={() => {
                        setMenuModalOpen(true);
                      }}
                    >
                      <img src={MenuIcon} alt="Menu" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-grow flex flex-col min-h-full">{children}</div>

            {footer ? (
              <div className="flex items-center justify-center py-4">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
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
