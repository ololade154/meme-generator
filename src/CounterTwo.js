import { useReducer } from 'react';
const initialState = {
  firstValue: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        firstValue: state.firstValue + action.value,
      };

    default:
      return state;
  }
};
function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{state.firstValue} </div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
    </div>
  );
}
export default CounterTwo;
