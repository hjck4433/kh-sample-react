import { Fragment } from 'react';
import './App.css';
// import Section from "./Section";
// import MyComponent from './MyComponent';
import Say from './Say';

function App() {
  // 화면을 그려주는 부분 + 자바스크립트 이벤트 처리

  return (
    <Fragment>
      {/* <Section title ="스포츠" content="This is the content of section 1."/>
      <Section title ="정치" content="This is the content of section 2."/> */}
      {/* <MyComponent name="햄스터" age={30}>
        안녕하세요
      </MyComponent> */}
      <Say />
    </Fragment>
  );
}

export default App;
