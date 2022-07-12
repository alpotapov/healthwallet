import React from 'react';
import PropTypes from 'prop-types';

import { ethers } from 'ethers';
import { useEthers, useContractFunction } from '@usedapp/core';

import PrimaryButton from '../PrimaryButton';
import { abis } from '../../contexts/ContractContext';
import CustomCheckbox from './CustomCheckbox';

const AddAsset = ({ poolAddress, assetToEdit, abortEditing }) => {
  const { signer } = useEthers();
  const [address, setAddress] = React.useState('');
  const [share, setShare] = React.useState('0');
  const [isLast, setIsLast] = React.useState(false);

  React.useEffect(() => {
    if (!assetToEdit) return;
    setAddress(assetToEdit.address);
    setShare(assetToEdit.share);
    setIsLast(assetToEdit.isLast);
  }, [assetToEdit]);

  const { send: sendChangeShareTransaction, state } = useContractFunction(
    new ethers.Contract(poolAddress, abis.polypool.interface, signer),
    'changeShare'
  );

  const transactionInProgress = React.useRef(false);

  const addAsset = () => {
    console.log({ address, share, isLast });
    if (
      address === '' ||
      share === '' ||
      transactionInProgress.current === true
    )
      return;
    transactionInProgress.current = true;
    sendChangeShareTransaction(address, ethers.BigNumber.from(share), isLast);
  };

  const reset = () => {
    setAddress('');
    setShare('0');
    setIsLast(false);
  };

  React.useEffect(() => {
    if (transactionInProgress.current === false) return;
    if (state.status === 'Success') {
      transactionInProgress.current = false;
      reset();
    }
  }, [state]);

  const onAddressChange = (value) => {
    if (assetToEdit) {
      abortEditing();
    }
    setAddress(value);
  };

  React.useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <div>
      <div className="flex flex-row space-x-2">
        <div className="form-control min-w-0 flex-grow">
          <label className="label">
            <span className="label-text text-xs text-silver">
              Token Address
            </span>
          </label>
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered input-md min-w-0 flex-grow"
            value={address}
            onChange={(event) => onAddressChange(event.target.value)}
          />
        </div>
        <div className="form-control w-20">
          <label className="label">
            <span className="label-text text-xs text-silver">Share</span>
          </label>
          <input
            type="text"
            placeholder="Share"
            className="input input-bordered input-md min-w-0 flex-grow"
            value={share}
            onChange={(event) => setShare(event.target.value)}
          />
        </div>
        <div className="w-20">
          <CustomCheckbox value={isLast} setValue={setIsLast} />
        </div>
      </div>
      <PrimaryButton onClick={addAsset} className="mt-4 w-full">
        {assetToEdit ? 'Edit Token' : 'Add Token'}
      </PrimaryButton>
    </div>
  );
};

AddAsset.propTypes = {
  poolAddress: PropTypes.string.isRequired,
  assetToEdit: PropTypes.shape({
    address: PropTypes.string,
    share: PropTypes.string,
    isLast: PropTypes.bool,
    idx: PropTypes.number,
  }),
  abortEditing: PropTypes.func,
};

AddAsset.defaultProps = {
  assetToEdit: undefined,
  abortEditing: () => {},
};

export default AddAsset;
