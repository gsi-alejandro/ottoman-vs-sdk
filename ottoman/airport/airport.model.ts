import { Schema, model, getDefaultInstance, getOttomanInstances } from 'ottoman';

const GeolocationSchema = new Schema({
  alt: Number,
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  accuracy: String,
});

const AirportSchema = new Schema({
  airportname: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  faa: String,
  geo: GeolocationSchema,
  icao: String,
  tz: { type: String, required: true },
});

export const Airport = model('airport', AirportSchema);
