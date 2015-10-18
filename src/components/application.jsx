import React, { Component } from 'react';

import List from './list';

const lists = [
  {
    name: 'foo',
    tasks: ['Do the thing', 'Do another thing']
  },
  {
    name: '',
    tasks: []
  }
];

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>Task Machine</h1>

        {lists.map(function (list, index) {
          return <List
            tasks={list.tasks}
            name={list.name}
            key={index}
          />
        })}
      </div>
    );
  }
};

