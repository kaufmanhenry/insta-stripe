const stripe = require('stripe');

const { stripeSecretKey } = require('./index');

if (!stripeSecretKey) console.error('A stripe secret key is required in order to authenticate.');

module.exports = stripe(stripeSecretKey);
