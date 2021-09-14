import { Collection } from 'couchbase';

export const create = async (key, data, collection: Collection) => {
  await collection.insert(key, data);
  return data;
};
