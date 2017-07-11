import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import fetchUsersRequest from '../actions/user';

import ListItem from '../components/ListItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchUsersRequest();
  }
  render() {
    const { user: { users, loaded, loading } } = this.props;
    return (
      <div>
        {loading && <p>Stuff is loading.</p>}
        {loaded && !users.length && <p>There was an error loading.</p>}
        {users && users.map(user => <ListItem key={user.id} name={user.name} email={user.email} />)}
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape({
    users: PropTypes.array,
    loaded: PropTypes.bool,
    loading: PropTypes.bool
  }).isRequired,
  fetchUsersRequest: PropTypes.func.isRequired
};

export default connect(({ user }) => ({ user }), { fetchUsersRequest })(App);
