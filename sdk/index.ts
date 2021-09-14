import { connect } from './config';
import { v4 } from 'uuid';
import { create } from './create';
import { findAndUpdateAirport } from './findOneAndUpdate';
import { findOneAndRemove } from './findOneAndRemove';
import { ottoman } from '../ottoman/config';

const main = async () => {
  const { airportCollection, cluster } = await connect();

  const key = v4();

  const airport = await create(
    key,
    {
      airportname: 'Hialeah Airport SDK',
      city: 'Hialeah',
      country: 'USA',
      tz: 'PST',
    },
    airportCollection
  );
  console.log('Created Airport:');
  console.log(airport);

  const airportUpdated = await findAndUpdateAirport({ airportname: 'Hialeah Airport SDK' }, { tz: 'EST' }, airportCollection, cluster);
  console.log('Updated Airport:');
  console.log(airportUpdated);

  const result = await findOneAndRemove({ airportname: 'Hialeah Airport SDK' }, airportCollection, cluster);
  console.log('Removed Airport:');
  console.log(result);

  await cluster.close();
  console.log('App Closed');
};

main();
