import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { dispatch } from '@rematch/core';

class App extends Component {
  render() {
    const { counter, todoList, increment, incrementAsync } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          The counter is: { counter }
        </p>
        <div>
          <ul>
            {
              todoList.map((todo, index) => <li key={index}>{todo}</li>)
            }
          </ul>
        </div>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={incrementAsync}>Increment Asynchronous</button>
        </div>
        <div>
          <button onClick={sasdasd}>Tambuah</button>
          <button onClick={incarementsdfsdAsyncasdfMANTABBBB}>Tambuah Asynchronous</button>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  counter: state.count.counter,
  todoList: state.todo.todoList
});

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
  increment: () => {
    dispatch.todo.add(1);
    increment(1)
  },
  incrementAsync: () => incrementAsync(1)
});

export default connect(
  mapState,
  mapDispatch
)(App);
