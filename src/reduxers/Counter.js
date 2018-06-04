
import expect from 'expect.js';

const counter = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
};
// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// 1
// store.dispatch({ type: 'INCREMENT' })
// 2
// store.dispatch({ type: 'DECREMENT' })
// 1
expect(counter(0, { type: 'INCREMENT' })).to.equal(1);

expect(counter(1, { type: 'INCREMENT' })).to.equal(2);

expect(counter(2, { type: 'DECREMENT' })).to.equal(1);

expect(counter(1, { type: 'DECREMENT' })).to.equal(0);

expect(counter(1, { type: 'SOMETHING_ELSE' })).to.equal(1);

expect(counter(undefined, {})).to.equal(0);

console.info('Test Store passed!');

export default counter;