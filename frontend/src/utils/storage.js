/**
 * Lightweight async storage wrapper.
 * Swap with @react-native-async-storage/async-storage when ready.
 */
const memoryStore = {};

export const storage = {
  get: async key => memoryStore[key] ?? null,
  set: async (key, value) => {
    memoryStore[key] = value;
  },
  remove: async key => {
    delete memoryStore[key];
  },
  clear: async () => {
    Object.keys(memoryStore).forEach(key => delete memoryStore[key]);
  },
};
