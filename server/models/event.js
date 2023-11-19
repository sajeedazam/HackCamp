const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  eventName: { type: String, required: true }, // user creating event can set it 
  location: { type: String, required: true }, // user creating event can set it
  date: { type: Date, required: true }, // user creating event can set it
  diet: { type: String, enum: ['halal', 'kosher', 'veg', 'celiac', 'other'], required: true },
  accessibility: { type: String, enum: ['yes', 'no'], required: true },
  rsvp: { type: String, enum: ['yes', 'no', 'maybe'], required: true }
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;