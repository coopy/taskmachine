import React, { Component } from 'react';
import Radium from 'radium';

import EditableLabel from './editable-label';
import Task from './task';

const styles = {
  root: {
    background: '#eee',
    border: '1px solid #666',
    padding: '1em',
    margin: '0 0 1em 0'
  }
};

@Radium
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      editing: true
    };
  }

  handleListNameChanged(newName) {
    // TODO dispatch action
  }

  render() {
    return (
      <div style={styles.root}>
        <EditableLabel
          prompt='Enter project name'
          // TODO pass in label from reducer
          label={undefined}
          labelChangedCallback={this.handleListNameChanged}
        />
        <ul>
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
