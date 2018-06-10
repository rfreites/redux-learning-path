import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Jumbotron,
  Label,
  Row
} from 'reactstrap';
// import ReactDOM from 'react-dom';
import './reduxers/Todos';
import './logo.svg';
import './App.css';
import FilterLink from './components/FilterLink';
import VisibleTodoList from './components/VisibleTodoList';

let nextTodo = 0;

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Add Todo</Label>
        <textarea ref={node => {
          input = node;
        }} className="form-control" aria-label="With textarea" />
      </FormGroup>
      <Button onClick={() => {
        dispatch({
          type: 'ADD_TODO',
          id: nextTodo++,
          text: input.value
        });
        input.value = '';
      }}
      outline color="primary">submit</Button>
    </Form>
  );
};
AddTodo = connect()(AddTodo);
const Filters = (props, { store }) => (
  <div>
    <FilterLink store={store} filter="SHOW_ALL" color="primary">Show All</FilterLink>{' '}
    <FilterLink store={store} filter="SHOW_ACTIVE" color="danger">Show Active</FilterLink>{' '}
    <FilterLink store={store} filter="SHOW_COMPLETED" colro="warning">Show Completed</FilterLink>{' '}
  </div>
);

AddTodo.contextTypes = {
  store: PropTypes.object
};

const App = () => (
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
          <AddTodo />
        </Col>
        <Col lg="6">
          <Row>
            <Col lg="12">
              <Filters />
            </Col>
          </Row>
          <VisibleTodoList />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;