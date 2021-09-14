import { Cluster, Collection, DocumentNotFoundError } from 'couchbase';

export const findAndUpdateAirport = async (filter, data, collection: Collection, cluster: Cluster) => {
  let whereClause = '';
  // notice: only support 1 key/value filter for more than one we need to implement a complex behavior and handle or/and for each filter
  // it's already solved in Ottoman with the query builder.
  for (const key in filter) {
    whereClause = `${key} = '${filter[key]}'`;
  }

  // build the n1ql query with limit 1
  // notice: we dont have support for select, extra step will be needed to achieve it.
  const n1qlQuery = `select meta().id, airportname, city, country, tz from \`travel-sample\`.\`inventory\`.\`airport\` where ${whereClause} limit 1`;
  console.log(n1qlQuery);

  const query = await cluster.query(n1qlQuery);
  const document = query.rows[0];

  // check the document exists
  if (!document) {
    throw new DocumentNotFoundError();
  }

  const { id, ...partialDocument } = document;
  // notice: we are no doing any validation here, for required or to ensure string values
  const partialDocumentUpdate = { ...partialDocument, ...data };

  // notice: upsert method don't return the document updated
  // while using the sdk we can return the possible document updated, in Ottoman it's not possible for possibles hooks implementations
  await collection.upsert(id, partialDocumentUpdate);
  return { ...partialDocumentUpdate, id };
};
