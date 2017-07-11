module.exports = {
  // Stripe configuration
  stripePublicKey: process.env.stripePublicKey,
  stripeSecretKey: process.env.stripeSecretKey,

  // Payment information
  person: process.env.paymentPerson,
  paymentAmount: process.env.paymentAmount,
  paymentDescription: process.env.paymentDescription
};
