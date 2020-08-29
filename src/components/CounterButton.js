import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  updateCount = () => {
    this.setState(state => {
      return { count: this.state.count + 1 }
    })
  }

  render() {
    console.log(this.props.color);
    return (
      // <button className={this.props.color} onClick={this.updateCount}>

      <button className={this.props.color + " f8 grow no-underline br-pill ba bw1 ph4 pv3 mb2 dib"} onClick={this.updateCount} >
        Count: { this.state.count}
      </button >
    );
  }
}

export default CounterButton;
