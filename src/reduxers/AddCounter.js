import expect from 'expect.js';

const addCounter = (list) => {
  // return list.concat([0]);
  return [...list, 0];
};

const removeCounter = (list, index) => {
  // return list
  //   .slice(0, index)
  //   .concat(list.slice(index + 1));
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  // return list
  //   .slice(0, index)
  //   .concat([list[index] + 1])
  //   .concat(list.slice(index + 1));
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  Object.freeze(listBefore);
  expect(addCounter(listBefore)).to.eql(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];
  Object.freeze(listBefore);
  expect(removeCounter(listBefore, 1)).to.eql(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  Object.freeze(listBefore);
  expect(incrementCounter(listBefore, 1)).to.eql(listAfter);
};

testAddCounter();
console.info('All AddCounter test passed.');
testRemoveCounter();
console.info('All removeCounter test passed.');
testIncrementCounter();
console.info('All incrementCounter test passed.');