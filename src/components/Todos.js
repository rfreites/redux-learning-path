import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import store from '../reduxers/Store';

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
  case 'SHOW_ALL':
    return todos;
    break;
  case 'SHOW_COMPLETED':
    return todos.filter(t => t.completed);
    break;
  case 'SHOW_ACTIVE':
    return todos.filter(t => !t.completed);
  default:
    return todos;
  }
};

class Todos extends Component {
  render() {
    const {
      todos,
      visibilityFilter
    } = this.props;

    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );

    return (
      <ListGroup style={{ marginTop: '10px' }}>
        {visibleTodos.map(todo => (<ListGroupItem
          style={{
            cursor: 'pointer',
            textAlign: 'left'
          }}
          color={todo.completed ? 'success' : 'danger'}
          onClick={(e) => {
            e.preventDefault();
            store.dispatch({
              type: 'TOGGLE_TODO',
              id: todo.id
            });
          }}
          currentfilter={visibilityFilter}
          key={`${todo.id}-todo`}><Badge pill style={{ marginRight: '10px' }}>{todo.id}</Badge>{todo.text}</ListGroupItem>))}
      </ListGroup>
    );
  }
}

Todos.defaultProps = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

Todos.propTypes = {
  todos: PropTypes.array,
  visibilityFilter: PropTypes.string
};

export default Todos;