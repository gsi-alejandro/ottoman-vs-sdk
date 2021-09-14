import { Cluster } from 'couchbase';
import { connectionString, password, username } from '../shared/constants';

export const connect = async () => {
  const cluster = await Cluster.connect(connectionString, {
    username,
    password,
  });

  const bucket = cluster.bucket('travel-sample');
  const airportCollection = bucket.scope('inventory').collection('airport');
  return { airportCollection, cluster };
};
