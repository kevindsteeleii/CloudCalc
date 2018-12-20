const express = require('express');
const router = express.Router();
const controller = require('../controller/calcController');

router
  .get('/all', (req, res) => {
    controller.showAll()
    .then(allStored => res.json(allStored))
  })

router
  .route('/:id')
  .get((req, res) => {
    controller.show(req)
    .then(storedVal => res.json(storedVal))
  })
router
  .route('/')
  .get((req, res) => {
    let test = controller.test();
    res.json({ test });
  })
  .post((req, res) => {
    controller.doOperation(req)
    .then(val => res.json(val))
  })



module.exports = router;
