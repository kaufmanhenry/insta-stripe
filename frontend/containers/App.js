import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import fetchPaymentRequest from '../actions/payment';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPaymentRequest();
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
        {payment && <div>
          <p style={styles.containerText}>
            Hi, <span style={styles.paymentPerson}>{payment.person}</span>.
            <br />
            <br />
            You’re about to pay <span style={styles.paymentAmount}>${payment.paymentAmount}</span> for <span style={styles.paymentDescription}>{payment.paymentDescription}</span>.
            <br />
            <br />
            <button style={styles.payNow}>Pay Now</button>
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
  fetchPaymentRequest: PropTypes.func.isRequired
};

export default connect(({ payment }) => ({ payment }), { fetchPaymentRequest })(App);
