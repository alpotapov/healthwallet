const pinataSDK = require('@pinata/sdk');

const pinata = pinataSDK(
  process.env.PINATA_API_KEY_1,
  process.env.PINATA_API_KEY_2
);

const uploadJSON = async (json) => {
  const options = {
    pinataMetadata: {
      name: 'healthwallet_test_results',
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  try {
    const result = await pinata.pinJSONToIPFS(json, options);
    console.log({ result });
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

module.exports = {
  uploadJSON,
};
