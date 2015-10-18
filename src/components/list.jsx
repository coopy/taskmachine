import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import EditableLabel from './editable-label';
import Task from './task';

const styles = {
  root: {
    background: '#eee',
    border: '1px solid #666',
    padding: '1em',
    margin: '0 0 1em 0'
  },
  list: {
    listStylePosition: 'inside'
  }
};

@Radium
export default class List extends Component {
  handleLabelChanged(newName) {
    this.props.listNameChangedCallback(this.props.id, newName);
  }

  render() {
    return (
      <div style={styles.root}>
        <EditableLabel
          prompt='Enter project name'
          label={this.props.name}
          labelChangedCallback={this.handleLabelChanged.bind(this)}
        />
        <ul style={styles.list}>
          {this.props.tasks.map(function (task, index) {
            return (
              <li key={index}>
                <Task name={task}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

List.propTypes = {
  listNameChangedCallback: PropTypes.func.isRequired
};
