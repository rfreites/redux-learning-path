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

    const Todo = ({
      onClick,
      completed,
      text,
      id
    }) => (
      <ListGroupItem
        style={{
          cursor: 'pointer',
          textAlign: 'left'
        }}
        color={completed ? 'success' : 'danger'}
        onClick={onClick}
        currentfilter={visibilityFilter}>
        <Badge pill style={{ marginRight: '10px' }}>{id}</Badge>
        {text}
      </ListGroupItem>);

    const TodoList = ({
      todos,
      onTodoClick
    }) => (
      <ListGroup style={{ marginTop: '10px' }}>
        {todos.map(todo => (
          <Todo key={`${todo.id}-todo`}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        ))}
      </ListGroup>
    );

    return (<TodoList
      todos={visibleTodos}
      onTodoClick={id =>
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })
      } />);
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