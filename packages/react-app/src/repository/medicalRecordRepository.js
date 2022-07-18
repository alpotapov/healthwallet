import create from 'zustand';

const useStore = create((set) => ({
  uids: [],
  medicalRecords: {},
  pushRecord: (uid, record) =>
    set((state) => ({
      medicalRecords: { ...state.medicalRecords, [uid]: record },
    })),
  pushUid: (uid) => set((state) => ({ uids: [...state.uids, uid] })),
}));

export default { useStore };
