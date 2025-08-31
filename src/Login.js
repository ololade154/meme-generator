import { useReducer } from 'react';
const initialState = {
  name: '',
  email: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.value };
    case 'setEmail':
      return { ...state, email: action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={state.name}
        onChange={(event) =>
          dispatch({ type: 'setName', value: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="email"
        value={state.email}
        onChange={(event) =>
          dispatch({ type: 'setEmail', value: event.target.value })
        }
      />
      <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
    </div>
  );
}
export default Login;
