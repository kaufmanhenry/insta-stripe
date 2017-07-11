import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, email }) => (
  <div>
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default ListItem;
