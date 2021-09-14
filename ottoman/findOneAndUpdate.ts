import { Airport } from './airport/airport.model';

export const findAndUpdateAirport = (filter, data) => Airport.findOneAndUpdate(filter, data);
