import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Row
} from 'reactstrap';
// import ReactDOM from 'react-dom';
import './reduxers/Todos';
import './logo.svg';
import './App.css';
import Todos from './components/Todos';
import store from './reduxers/Store';

let nextTodo = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    store.dispatch({
      type: 'ADD_TODO',
      id: nextTodo++,
      text: this.state.textInput
    });
    this.setState({ textInput: '' });
  }

  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Todos app</h1>
            <p className="lead">This is a todo app.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col lg="6">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Add Todo</Label>
                  <Input onChange={(e) => this.setState({ textInput: e.target.value })} value={this.state.textInput} type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button onClick={() => this.handleSubmit()} outline color="primary">submit</Button>
              </Form>
            </Col>
            <Col lg="6">
              <Todos todos={this.props.todos} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;