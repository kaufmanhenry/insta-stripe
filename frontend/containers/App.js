import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import StripeCheckout from 'react-stripe-checkout';

import { fetchPaymentRequest, chargePaymentRequest } from '../actions/payment';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPaymentRequest();
  }

  onToken = (token) => {
    this.props.chargePaymentRequest({ token });
  }

  render() {
    const { payment: { payment, loaded, loading } } = this.props;

    const styles = {
      container: {
        padding: 100,
        color: '#111',
        maxWidth: 640
      },
      containerText: {
        fontSize: 40,
        lineHeight: 1.4
      },
      payNow: {
        backgroundColor: '#aaa',
        color: '#fff',
        padding: '16px 24px',
        fontSize: 20,
        border: 0,
        borderRadius: 4,
        fontWeight: 700,
        cursor: 'pointer'
      },
      paymentPerson: {
        color: '#FF4136'
      },
      paymentAmount: {
        color: '#2ECC40'
      },
      paymentDescription: {
        color: '#0074D9'
      }
    };

    return (
      <div style={styles.container}>
        {loading && <p>The payment is loading.</p>}
        {loaded && !payment && <p>There was an error loading.</p>}
        {payment.message && <p style={styles.containerText}>{payment.message}</p>}
        {payment && payment.stripePublicKey && <div>
          <p style={styles.containerText}>
            Hi, <span style={styles.paymentPerson}>{payment.person}</span>.
            <br />
            <br />
            You’re about to pay <span style={styles.paymentAmount}>${payment.paymentAmount / 100}</span> for <span style={styles.paymentDescription}>{payment.paymentDescription}</span>.
            <br />
            <br />
            <StripeCheckout
              token={this.onToken}
              stripeKey={payment.stripePublicKey}
              amount={payment.paymentAmount}
              name={`Paying ${payment.person}`}
              description={payment.paymentDescription}
            >
              <button style={styles.payNow}>Pay Now</button>
            </StripeCheckout>
          </p>
        </div>}
      </div>
    );
  }
}

App.propTypes = {
  payment: PropTypes.shape({
    payment: PropTypes.object,
    loaded: PropTypes.bool,
    loading: PropTypes.bool
  }).isRequired,
  fetchPaymentRequest: PropTypes.func.isRequired,
  chargePaymentRequest: PropTypes.func.isRequired
};

export default connect(
  ({ payment }) => ({ payment }),
  { fetchPaymentRequest, chargePaymentRequest })(App);
