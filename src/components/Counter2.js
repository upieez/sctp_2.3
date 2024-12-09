import React from "react";

class Counter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Class Fruits",
      count: 0,
    };
  }

  handlerAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handlerMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h1>Counter Class Based Components</h1>
        <h2>{this.state.name}</h2>
        <button onClick={this.handlerMinus}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handlerAdd}>+</button>
      </>
    );
  }
}

export default Counter2;
