import { useState } from 'react';

const TodoList = () => {
  const origin = [
    { id: 1, text: 'html 연습' },
    { id: 2, text: 'css 복습' },
    { id: 3, text: '자바스크립트' },
    { id: 4, text: '리액트공부' },
  ];
  const [todo, setTodo] = useState(origin);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState('5');

  const onChange = (e) => setInputText(e.target.value); // 내용이 입력 될 때 변경을 감지
  // 버튼이 눌러졌을 때 새로운 todo list 추가
  const onClick = () => {
    const nextTodo = todo.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setTodo(nextTodo); // 새로운 todo List 반영하고 리렌더링
    setInputText(''); // 입력창을 초기화 해줌
  };

  const onRemove = (id) => {
    const removedTodo = todo.filter((e) => e.id !== id);
    setTodo(removedTodo);
  };

  // 같은 text 포함된 것만 남기기
  const onSearch = (text) => {
    const remainTodo = todo.filter((e) => e.text.includes(text));
    setTodo(remainTodo);
    setInputText('');
  };

  // 초기 리스트로 돌아가기
  const toOrigin = () => {
    setTodo(origin);
  };

  const newTodoList = todo.map((e) => (
    <li key={e.id} onDoubleClick={() => onRemove(e.id)}>
      {e.text}
    </li>
  ));

  return (
    <>
      <p className="title-name">할 일 목록</p>
      <p className="del-guide">삭제하려면 해당 항목을 더블 클릭 하세요.</p>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <button onClick={() => onSearch(inputText)}>검색</button>
      <button onClick={toOrigin}>초기상태로!</button>
      <ul>{newTodoList}</ul>
    </>
  );
};

export default TodoList;
