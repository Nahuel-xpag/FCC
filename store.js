import { createStore } from 'redux';

// Define the initial state of the store
const initialState = {
  inputValue: '',
};

// Define the action types
const INPUT_CHANGE = 'INPUT_CHANGE';

// Define the action creators
export const inputChange = (value) => {
  return {
    type: INPUT_CHANGE,
    payload: value,
  };
};

// Define the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);
export default store;
