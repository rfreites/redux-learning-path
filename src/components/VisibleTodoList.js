import React from 'react';
import { connect } from 'react-redux';
import {
  Badge,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

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
const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;