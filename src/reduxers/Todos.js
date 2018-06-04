import expect from 'expect.js';
import deepfreeze from 'deep-freeze';

const todo = (state, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      id: action.id,
      text: action.text,
      completed: false
    };
    break;
  case 'TOGGLE_TODO':
    if (state.id !== action.id) {
      return state;
    }

    return {
      ...state,
      completed: !state.completed
    };
    break;
  default:
    return state;
  }
};
const todos = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      todo(undefined, action)
    ];
    break;
  case 'TOGGLE_TODO':
    return state.map(t => todo(t, action));
    break;
  default:
    return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];

  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };

  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepfreeze(stateBefore);
  deepfreeze(action);

  expect(todos(stateBefore, action)).to.eql(stateAfter);
};

const testToogleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Learn React',
      completed: false
    }
  ];

  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };

  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Learn React',
      completed: true
    }
  ];

  deepfreeze(stateBefore);
  deepfreeze(action);

  expect(todos(stateBefore, action)).to.eql(stateAfter);
};

testAddTodo();
testToogleTodo();
console.log('Test Todos passed!');

export default todos;