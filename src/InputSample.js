import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      {/* value 설정해줘야 초기화 눌렀을때 비워줄 수 있음 */}
      <button onChange={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;
