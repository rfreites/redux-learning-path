import { createStore, combineReducers } from 'redux';
import todos from './Todos';
import visibilityFilter from './VisibilityFilter';

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibility,
//       action
//     )
//   };
// };

// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key) => {
//         nextState[key] = reducers[key](
//           state[key],
//           action
//         );
//         return nextState;
//       },
//       {}
//     );
//   };
// };

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// In combineReducers function, if object notation key-value are the same
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

export default store;