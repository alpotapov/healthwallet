import React from 'react';
import PropTypes from 'prop-types';
import { getChainById } from '@usedapp/core';

import MetamaskIcon from './Metamask.png';
import Logo from './Logo.png';
import WalletConnection from '../../components/WalletConnection/WalletConnection';

const expectedChainId = parseInt(process.env.REACT_APP_NETWORK_ID, 10);
const { chainName: deployedToChainName, chainId: deployedToChainId } =
  getChainById(expectedChainId);

const ConnectPage = ({ disconnectReason }) => {
  const connectionErrors = {
    'no-connection': <WalletConnection />,
    'wrong-network': (
      <div className="p-2 text-center">
        <p>
          Choose {deployedToChainName} network (ID: {deployedToChainId}) in your
          Metamask wallet.
        </p>
      </div>
    ),
    initializing: null,
  };
  return (
    <div className="h-screen bg-black">
      <div className="container mx-auto pt-24 space-y-24 flex flex-col items-center">
        <div className="flex flex-row justify-center">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="bg-white border rounded-lg w-96 h-96 flex flex-col justify-center items-center">
          <img className="w-48" src={MetamaskIcon} alt="Metamask" />
          <div className="text-3xl font-extralight uppercase mb-12">
            Metamask
          </div>
          {connectionErrors[disconnectReason]}
        </div>
      </div>
    </div>
  );
};

ConnectPage.propTypes = {
  disconnectReason: PropTypes.string.isRequired,
};

export default ConnectPage;
