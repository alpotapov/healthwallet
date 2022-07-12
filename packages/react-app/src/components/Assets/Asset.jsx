/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';
import { shortenAddress } from '@usedapp/core';

// import useTokenInfo from '../../hooks/useTokenInfo';

import EditIcon from './Edit.svg';

const Asset = ({ address, share, idx, onEdit }) => {
  return (
    <div className="flex flex-row space-x-2">
      <div className="form-control w-14">
        <label className="label">
          <span className="label-text text-xs text-silver">Index</span>
        </label>
        <input
          type="text"
          placeholder="Address"
          className="input input-bordered input-md min-w-0 border-r-0 flex-grow"
          defaultValue={idx}
          disabled
        />
      </div>
      <div className="form-control min-w-0 flex-grow">
        <label className="label">
          <span className="label-text text-xs text-silver">Token Address</span>
        </label>
        <label className="input-group input-group-md">
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered input-md min-w-0 border-r-0 flex-grow"
            defaultValue={address}
            disabled
          />
          {/* <span className="btn-ghost bg-gray-50">TKNS</span> */}
        </label>
      </div>
      <div className="form-control w-20">
        <label className="label">
          <span className="label-text text-xs text-silver">Share</span>
        </label>
        <label className="input-group input-group-sm">
          <input
            type="text"
            placeholder="Share"
            className="input input-bordered input-md min-w-0 flex-grow"
            defaultValue={share}
            disabled
          />
        </label>
      </div>
      <div className="form-control w-12">
        <label className="label">
          <span className="label-text text-xs text-silver">Edit</span>
        </label>
        <label className="flex flex-col justify-center items-center">
          <button
            type="button"
            className="btn btn-ghost p-0"
            onClick={() => onEdit()}
          >
            <img src={EditIcon} alt="Edit" className="w-6" />
          </button>
        </label>
      </div>
    </div>
  );
};

Asset.propTypes = {
  address: PropTypes.string.isRequired,
  share: PropTypes.instanceOf(ethers.BigNumber).isRequired,
  idx: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Asset;
