import React, { Component } from "react";

class Counter extends React.Component {
  // data that is private or local for this component and is not accessible from other places
  // state = {
  //   value: this.props.counter.value,
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // need to use arrow fn to inherit this obj
  // handleIncrement = product => {
  //   // tells that we update state and dom will sync with virtual dom
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("value is updated");
    }
  }

  componentWillUnmount() {
    // called before removing component from the DOM
    console.log("Counter - DidUnmount");
  }

  render() {
    // props are input for component, data that is passed to it. Props are read only
    // console.log(this.props);
    console.log("Counter - Rendered");
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
          disabled={this.props.counter.value < 1}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="button btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
