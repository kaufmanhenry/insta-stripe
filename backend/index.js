const { Router } = require('express');

const router = Router();

const exampleData = [
  {
    id: 1,
    name: 'Tara Simmmons',
    email: 'tara.simmmons55@example.com'
  },
  {
    id: 2,
    name: 'Willie Romero',
    email: 'willie.romero57@example.com'
  },
  {
    id: 3,
    name: 'Holly Barnes',
    email: 'holly.barnes11@example.com'
  }
];

router.get('/users', (req, res) => res.send(exampleData));

module.exports = router;
