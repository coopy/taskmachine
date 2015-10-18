import React, { Component, PropTypes } from 'react';

import Radium from 'radium';

@Radium
export default class Task extends Component {
  render() {
    return <span>{this.props.name}</span>;
  }
};

Task.propTypes = {
  name: PropTypes.string
};
