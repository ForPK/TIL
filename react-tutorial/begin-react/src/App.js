import React, { Fragment } from "react";
import Hello from "./Hello.js";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };
  return (
    <Fragment>
      {/* 주석은 이렇게 */}
      <Hello
      // 이렇게도 주석 가능
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Fragment>
  );
}

// 태그는 꼭 닫혀야 한다. <input />, <div></div>, <Hello/>
// 두 개 이상 태그는 감싸져 있어야한다.
// const name = '이렇게';
// return <div>jacascript 값 보여줄땐 {name}</div>
// style은 객체 형태로
// class가 아닌 className

export default App;
