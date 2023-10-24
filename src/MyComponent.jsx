//props 기본값 설정 : defaultProps
const MyComponent = ({ name, age, children }) => {
  // 비구조화할당 (구조 분해) : props 객체의 속성과 값을 변수에 대입 함
  // const { name, age, children } = props;

  return (
    <div>
      안녕하세요. 제 이름은 {name} 입니다. 나이는 {age}, 인사말
      {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
  age: 20,
};

export default MyComponent;
