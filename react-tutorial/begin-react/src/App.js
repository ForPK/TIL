import React from "react";
import Hello from "./Hello.js";
import Wrapper from "./wrapper.js";

function App() {
  return (
    <Wrapper>
      {/* 이 안의 내용들이 children */}
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
