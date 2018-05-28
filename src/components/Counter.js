import React, { Component } from 'react';
import { Button } from 'reactstrap';
export default class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <Button  onClick={this.props.onIncrement} outline color="primary">Increment</Button>
        <Button  onClick={this.props.onDecrement} outline color="danger">Decrement</Button>
      </div>
    )
  } 
}