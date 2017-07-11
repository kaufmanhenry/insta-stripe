const { Router } = require('express');

const stripe = require('../config/stripe');

const { person, paymentAmount, paymentDescription, stripePublicKey } = require('../config');

const router = Router();

router.get('/configuration', (req, res) => res.send({
  person,
  paymentDescription,
  paymentAmount,
  stripePublicKey
}));

router.post('/charge', (req, res) => {
  const source = req.body.stripeToken;

  return stripe.charges.create({
    amount: paymentAmount,
    currency: 'usd',
    source,
    description: paymentDescription
  }, (err) => {
    if (err) return res.status(err.status || 500).send(err);

    return res.status(200).send('Successfully charged.');
  });
});

module.exports = router;
