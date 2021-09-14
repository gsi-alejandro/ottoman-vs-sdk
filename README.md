# Ottoman vs SDK show case

Objective: Breakdown some operation implementations in Ottoman 
and show how it could be implemented with the SDK.

Operations
1. create 
2. findOneAndUpdate
3. findOneAndRemove

## Getting started

You need to ensure you have Couchbase Server up and running. We recommended use this command:
```shell
docker run -d --name couchbase-sandbox-7.0 -p 8091-8094:8091-8094 -p 11210:11210 couchbase/server-sandbox:7.0.0
```

Availables script to run the app:
- `yarn dev`     -> will run the Ottoman app
- `yarn dev:sdk` -> will run the SDK app


in both example the show case file will be index.ts in the corresopnding folder:
- `ottoman`
- `sdk`

the content will be the same as possible:
```typescript
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
```

To check the whole implementation go to the definition file.
