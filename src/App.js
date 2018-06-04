import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
// import ReactDOM from 'react-dom';
import './reduxers/Todos';
import './logo.svg';
import './App.css';
import store from './reduxers/Store';


class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      todoDescription: ''
    };

    this.addTodo = this.addTodo.bind(this);
    this.updateTodoDescription = this.updateTodoDescription.bind(this);
  }

  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }

  componentDidMount() {
    store.subscribe(() => {
      console.info(store.getState());
    });
  }

  addTodo() {
    store.dispatch({
      type: 'ADD_TODO',
      id: this.state.count,
      text: this.state.todoDescription
    });

    this.setState({
      count: this.state.count + 1,
      todoDescription: ''
    });
  }

  updateTodoDescription(e) {
    this.setState({ todoDescription: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col lg="12">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Todo</Label>
                  <Input onChange={this.updateTodoDescription} value={this.state.todoDescription} type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button onClick={this.addTodo} outline color="primary">add todo</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;