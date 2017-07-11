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
    return (
      <div>
        {loading && <p>The payment is loading.</p>}
        {loaded && !payment && <p>There was an error loading.</p>}
        {payment && <div>
          <p>
            Hi, {payment.person}.
            You’re about to pay ${payment.paymentAmount} for {payment.paymentDescription}.
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
