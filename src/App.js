import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super();
    console.log('App - constructor');
    // if want to access props, it has to be passed as a parameter to constructor
    //console.log(props);
  }

  componentDidMount() {
    // ajax call
    console.log('App - DidMount');
  }

  render() {
    console.log('App - rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onDecrement={this.handleDecrement} />
        </main>
      </React.Fragment>
    );
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters: counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({ counters: counters });
    console.log('Event Handler Called', counterId);
  }

  handleIncrement = (counter) => {
    // it's not a copy, it's the same counters from state
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
    console.log(this.state.counters[index]);
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters: counters });
  }
}

export default App;
