module.exports = (app, callback) => {
  const router = app.get('router')();
  const stripe = app.get('StripeProvider');
  const { person, paymentAmount, paymentDescription, stripePublicKey } = app.get('config');

  router.get('/configuration', (req, res) => res.send({
    person,
    paymentDescription,
    paymentAmount,
    stripePublicKey
  }));

  router.post('/charge', (req, res) => {
    if (!req.body.token) return res.status(422).send('No token supplied to charge');
    const { id } = req.body.token;
    if (!id) return res.status(422).send('No ID supplied to charge');

    return stripe.charges.create({
      amount: paymentAmount,
      currency: 'usd',
      source: id,
      description: paymentDescription
    }, (error) => {
      if (error) return res.status(error.status || 500).send({ error });

      return res.status(200).send({
        status: 200,
        message: 'Successfully charged.'
      });
    });
  });

  return callback(null, router);
};
