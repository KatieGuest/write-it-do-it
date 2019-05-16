'use strict';

const express = require('express');
const { Dog } = require('../app/server/models');

// This router is already mounted on `/api` in app/server/app.js
const router = express.Router();
router.post('/dogs', async (req, res, next) => {
  const all = await Dog.create(req.body);
  const message = {
    message: 'Success',
    data: all
  };
  console.log('ALL', all);
  res.status(201).send(message);
});

module.exports = router;
