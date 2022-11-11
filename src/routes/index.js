const express = require('express');
const router = express.Router();
const package = require("../package.json");
const time = Date.now();
const now = new Date(time);

/* GET home page. */
router.get('/', (req, res, next) => res.send({ name: package.name, date: now.toString() }));

// URL query string

router.get('/users/:name', (req, res, next) => {
  console.log(req.params.name)
  res.send({name: req.params.name})
}
);

module.exports = router;
