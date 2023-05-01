import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputChange } from './store';

const InputComponent = () => {
  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(inputChange(value));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <div>{inputValue}</div>
    </div>
  );
};

export default InputComponent;

