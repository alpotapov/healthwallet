const storageKey = 'HealthWallet_TestUidStorage';

const getTestUids = () => {
  const testUids = localStorage.getItem(storageKey);
  return testUids ? JSON.parse(testUids) : [];
};

const saveTestUid = (uid) => {
  const storedUids = getTestUids();
  storedUids.push(uid);
  localStorage.setItem(storageKey, JSON.stringify(storedUids));
};

export default {
  getTestUids,
  saveTestUid,
};
