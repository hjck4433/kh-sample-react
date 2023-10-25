import { useState } from 'react';

const EventHandler = () => {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + ' : ' + message);
    // 초기화
    setUserName('');
    setMessage('');
  };
  // 엔터키를 누르면
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        value={userName}
        onChange={onChangeUserName}
      />
      <input
        type="text"
        placeholder="아무 메세지"
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};
export default EventHandler;
