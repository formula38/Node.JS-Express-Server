const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('Users Here');
});

router.get('/new', (req, res) => {
  res.send('Users New Form Here')
});

router.post('/', (req, res) => {
  res.send('Created User');
});

router.route('/:id')
    .get((req, res) => {
      res.send(`Get User with ID ${req.params.id}`);
    })
    .put((req, res) => {
      res.send(`Update User with ID ${req.params.id}`);
    })
    .delete((req, res) => {
      res.send(`Delete User with ID ${req.params.id}`);
    });

module.exports = router;
