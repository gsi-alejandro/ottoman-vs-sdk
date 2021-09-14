import { ottoman } from './config';
import { createAirport } from './create';
import { findAndUpdateAirport } from './findOneAndUpdate';
import { findOneAndRemove } from './findOneAndRemove';

const main = async () => {
  await ottoman.start();
  console.log('App Started');

  const airport = await createAirport({
    airportname: 'Hialeah Airport',
    city: 'Hialeah',
    country: 'USA',
    tz: 'PST',
  });
  console.log('Created Airport:');
  console.log(airport);

  const airportUpdated = await findAndUpdateAirport({ airportname: 'Hialeah Airport' }, { tz: 'EST' });
  console.log('Updated Airport:');
  console.log(airportUpdated);

  const result = await findOneAndRemove({ airportname: 'Hialeah Airport' });
  console.log('Removed Airport:');
  console.log(result);

  await ottoman.close();
  console.log('App Closed');
};

main();
