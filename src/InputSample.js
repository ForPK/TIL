import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  //useRef로 특정 DOM 선택하기
  const nameInput = useRef();
  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    const nextInputs = {};

    // 리액트에서 객체를 업데이트할때는 객체를 복사해둬야함
    setInputs({
      ...inputs,
      // 기존 상태 복사
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
    // current가 name input을 가리킴
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={useRef}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      {/* 
      input이 여러 개일때 userState 여러 번 사용하고
      onChange를 여러 번 사용해서 할 수는 있지만 좋은 방법은 아님.
      input에 name을 설정 후 이벤트가 발생했을때 이 값을 참조하는 방법 
      */}
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
// 객체 상태를 업데이트할때에는 기존 상태를 한 번 복사하고 나서
// 거기에 특정 값을 덮어씌우고 그걸 새로운 상태로 설정해줘야함 불변성 지켜줘야함
// 그래야 리액트가 변화 발생한 걸 감지
// 불변성을 지켜줘야만 컴포넌트 업데이트 성능을 최적화할 수 있음

export default InputSample;
