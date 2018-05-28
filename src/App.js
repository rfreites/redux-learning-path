import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './Reduxers';
import { Container, Row, Col } from 'reactstrap';
import Counter from './components/Counter';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({count: store.getState()})
    })
  }
 
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col lg="12">
              <Counter 
                value={this.state.count}
                onIncrement={this.increment}
                onDecrement={this.decrement}
                />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;