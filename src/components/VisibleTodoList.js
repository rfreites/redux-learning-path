import React, { Component } from 'react';
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

const Todo = ({
  completed,
  id,
  onClick,
  text,
  visibilityFilter
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
  </ListGroupItem>
);

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

class VisibleTodoList extends Component {
  componentWillMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    const state = store.getState();
    const todos = getVisibleTodos(
      state.todos,
      state.visibilityFilter
    );

    console.log(todos);
    return (
      <TodoList
        todos={todos}
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}

export default VisibleTodoList;