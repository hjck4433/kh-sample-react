import { useRef } from 'react';

const CreateRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // inputRef.current.disabled = false;
    // inputRef.current.focus();

    // 개인적인 test
    const a = inputRef.current;
    a.disabled === true ? (a.disabled = false) : (a.disabled = true);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </>
  );
};
export default CreateRef;
