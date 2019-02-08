'use strict'

const router = require('express').Router()
const { Candy } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const data = await Candy.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
})

module.exports = router;