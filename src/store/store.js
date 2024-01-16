import { createStore } from 'redux';

const reducer = state => state;

const store = createStore(reducer, 0);

console.log('store:>>', store);

console.log(store.getState());
