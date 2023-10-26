import { useReducer } from 'react';
// useState와 마찬가지로 상태관리를 위해서 사용, 복잡한 로직을 가진 상태를 관리하는데 유용

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
};
const Counter2 = () => {
  //dispatch => action
  const [state, dispatch] = useReducer(reducer, { value: 0 }); // 상태값이 객체
  return (
    <>
      <p>현재 카운터 값은 {state.value}</p> 입니다.
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소</button>
    </>
  );
};
export default Counter2;
