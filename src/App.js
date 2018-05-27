import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './Reduxers';
import { Container, Row, Col, Button } from 'reactstrap';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col lg="12">
              <Button  onClick={this.increment} outline color="primary">Increment</Button>
              <Button  onClick={this.decrement} outline color="primary">Decrement</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;