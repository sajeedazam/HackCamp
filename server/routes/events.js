const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.post('/', async (req, res) => {
    try {
      const { name, date, description, userId } = req.body;
      const event = new Event({ name, date, description, user: userId });
      await event.save();
      res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/:userId', async (req, res) => {
    try {
      const events = await Event.find({ user: req.params.userId });
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;