import { createStore } from 'redux';
import todos from './Todos';
import visibilityFilter from './VisibilityFilter';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

const todoApp = (state = {}, action) => {
  return {
    todos: todos(
      state.todos,
      action
    ),
    visibilityFilter: visibilityFilter(
      state.visibility,
      action
    )
  };
};

const store = createStore(todoApp);

export default store;