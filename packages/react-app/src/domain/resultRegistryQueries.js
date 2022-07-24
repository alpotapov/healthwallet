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

const toMedicalRecord = (uid, testResult) => {
  return {
    [uid]: {
      ...testResult,
      status: 'Finished',
    },
  };
};

const cacheLocally = async (testResult) => {
  console.log({ caching: testResult });
  const { medicalRecords } = medicalRecordRepository.useStore.getState();
  const updatedRecords = {
    ...medicalRecords,
    ...toMedicalRecord(testResult.uid, testResult),
  };
  medicalRecordRepository.useStore.setState({ medicalRecords: updatedRecords });
};

const savePlaceholder = (uid) => {
  const { medicalRecords } = medicalRecordRepository.useStore.getState();
  const updatedRecords = {
    ...medicalRecords,
    [uid]: {
      uid,
      status: 'Pending',
      date: Date.now(),
    },
  };
  medicalRecordRepository.useStore.setState({ medicalRecords: updatedRecords });
};

const setStatusFetching = (uid) => {
  const { medicalRecords } = medicalRecordRepository.useStore.getState();
  const updatedRecords = {
    ...medicalRecords,
  };
  updatedRecords[uid].status = 'Fetching...';
  medicalRecordRepository.useStore.setState({ medicalRecords: updatedRecords });
};

const fetchWithTimeout = async (ipfsUrl) => {
  const controller = new AbortController();

  // 5 second timeout:
  setTimeout(() => controller.abort(), 5000);

  return fetch(ipfsUrl, { signal: controller.signal });
};

const checkPendingResults = async (provider) => {
  const { medicalRecords, uids } = medicalRecordRepository.useStore.getState();

  uids
    .filter((uid) => !(uid in medicalRecords))
    .forEach((uid) => {
      savePlaceholder(uid);
    });

  const uidsToQuery = uids
    .filter((uid) => uid in medicalRecords)
    .filter((uid) => medicalRecords[uid].status !== 'Finished');
  if (uidsToQuery.length === 0) return;

  console.log({ uidsToQuery });
  const records = await getRegistryRecords(uidsToQuery, provider);
  records.forEach(
    (record, index) => record !== '' && setStatusFetching(uidsToQuery[index])
  );

  const filteredRecords = records.filter((record) => record !== '');
  console.log({ filteredRecords });

  const resultJson = await Promise.all(
    filteredRecords.map((cid) =>
      fetchWithTimeout(`http://ipfs.io/ipfs/${cid}`)
        .then((response) => response.json())
        .then((testResult) => cacheLocally(testResult))
        .catch(() => {})
    )
  );
  console.log({ resultJson });
};

export default {
  getRegistryRecords,
  checkPendingResults,
};
