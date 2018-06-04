import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <Button outline color="primary">Increment</Button>
        <Button outline color="danger">Decrement</Button>
      </div>
    );
  }
}