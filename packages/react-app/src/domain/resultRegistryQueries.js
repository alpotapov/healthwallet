import { ethers } from 'ethers';
import { interfaces, addresses } from '../contexts/ContractContext';
import medicalRecordRepository from '../repository/medicalRecordRepository';

const getRegistryRecords = async (uids, provider) => {
  const resultRegistry = new ethers.Contract(
    addresses.resultRegistry,
    interfaces.resultRegistry,
    provider
  );
  const records = await resultRegistry.getMeasurements(uids);

  return records;
};

const toMedicalRecords = (uids, cids) => {
  return uids.reduce((acc, uid, index) => {
    return {
      ...acc,
      [uid]: {
        date: '29.10.2022',
        typeTest: 'Ferritin',
        status: cids[index] === '' ? 'Pending' : 'Finished',
        uid: uids[index],
      },
    };
  }, {});
};

const checkPendingResults = async (provider) => {
  const { medicalRecords, uids } = medicalRecordRepository.useStore.getState();
  const uidsToQuery = uids.filter(
    (uid) =>
      !(uid in medicalRecords) || medicalRecords[uid].status !== 'Finished'
  );
  if (uidsToQuery.length === 0) return;

  const records = await getRegistryRecords(uidsToQuery, provider);
  const updatedRecords = {
    ...medicalRecords,
    ...toMedicalRecords(uidsToQuery, records),
  };
  medicalRecordRepository.useStore.setState({ medicalRecords: updatedRecords });
};

export default {
  getRegistryRecords,
  checkPendingResults,
};
