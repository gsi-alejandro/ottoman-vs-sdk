import { Ottoman } from 'ottoman';
import { bucketName, connectionString, password, username } from '../shared/constants';

const ottoman = new Ottoman({ modelKey: 'type' });
ottoman.connect({
  connectionString,
  password,
  username,
  bucketName,
});

export { ottoman };
