import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

class Todos extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.todos.map(todo => <ListGroupItem key={`${todo.id}-todo`}><Badge pill>{todo.id}</Badge>{todo.text}</ListGroupItem>)}
      </ListGroup>
    );
  }
}

Todos.defaultProps = {
  todos: []
};

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;