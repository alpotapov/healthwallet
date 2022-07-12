import React from 'react';
import PropTypes from 'prop-types';

import useShareAddresses from '../../hooks/useShareAddresses';
import useShareValues from '../../hooks/useShareValues';

import Asset from './Asset';
import AddAsset from './AddAsset';
import useFixShare from '../../hooks/useFixShare';

const AddAssets = ({ poolAddress }) => {
  const shareAddresses = useShareAddresses(poolAddress);
  const shareValues = useShareValues(poolAddress, shareAddresses);
  const fixShare = useFixShare(poolAddress);

  const [assetToEdit, setAssetToEdit] = React.useState(undefined);

  return (
    <div className="border rounded-lg p-6">
      <p className="text-2xl text-primary uppercase font-extralight">Assets</p>

      <div className="space-y-4 mt-4">
        {shareAddresses.length > 0 && shareValues.length > 0
          ? shareAddresses.map((asset, idx) => (
              <Asset
                address={asset}
                share={shareValues[idx]}
                idx={idx}
                key={asset}
                onEdit={() =>
                  setAssetToEdit({
                    address: asset,
                    share: shareValues[idx].toString(),
                    isLast: false,
                  })
                }
              />
            ))
          : null}
      </div>

      {!fixShare ? (
        <div className="mt-8">
          <AddAsset
            poolAddress={poolAddress}
            assetToEdit={assetToEdit}
            abortEditing={() => setAssetToEdit(undefined)}
          />
        </div>
      ) : null}
    </div>
  );
};

AddAssets.propTypes = {
  poolAddress: PropTypes.string.isRequired,
};

export default AddAssets;
