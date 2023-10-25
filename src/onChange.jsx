// onChange 이벤트 핸들링
import { useState } from 'react';

const EventPractice = () => {
  const [message, setMessage] = useState('안녕하세요');
  const changeMsg = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="아무거나 입력 하세요"
        onBlur={changeMsg}
      />
      <h2>입력 받은 메세지 : {message}</h2>
    </>
  );
};
export default EventPractice;
