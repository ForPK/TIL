import React from "react";

function Counter() {
  const onIncrease = () => {
    console.log("+1");
  };

  const onDecrease = () => {
    console.log("-1");
  };
  return (
    <div>
      <h2>0</h2>
      <button onClick={onIncrease}>+ 1</button>
      <button onClick={onDecrease}>- 1</button>
      {/* {} 함수를 넣어주는 것. 호출해주는게 아님 onIncrease() */}
    </div>
  );
}

export default Counter;
