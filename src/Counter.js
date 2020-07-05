import React, { useState } from "react";

function Counter() {
  // number라는 상태를 만들건데 기본 값은 0으로 설정
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
    // setNumber(prevNumber => prevNumber +1); 최적화, 함수형 업데이트
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+ 1</button>
      <button onClick={onDecrease}>- 1</button>
      {/* {} 함수를 넣어주는 것. 호출해주는게 아님 onIncrease() */}
    </div>
  );
}
// useState를 사용해서 바뀌는 값을 관리할 수 있고 기본 값 설정 가능
// useState는 배열을 반응하는데 첫번째는 현재상태, 두번째는 바꾸는 이 상태를 바꾸는 함수

export default Counter;
