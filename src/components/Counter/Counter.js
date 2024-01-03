import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: this.props.initialValue || 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      currentValue: prevState.currentValue + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      currentValue: prevState.currentValue - 1,
    }));
  };

  render() {
    const { currentValue } = this.state;

    return React.createElement('div', null,
      React.createElement('h2', null, '1. Counter'),
      React.createElement('h3', null, `Value: ${currentValue}`),
      React.createElement('button', { onClick: this.increment }, 'Increment'),
      React.createElement('button', { onClick: this.decrement }, 'Decrement')
    );
  }
}

export default Counter