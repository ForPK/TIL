import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color,
      }}
    >
      {/* {isSpecial ? <b>&&</b> : null} 값이 다를때*/}
      {/*  {null, false, undefined}등 나타나지 않지만 {0}은 0으로 나타남 */}
      {isSpecial && <b>#$%</b>} {/* 단순히 보여주고 숨기고 할때 */}
      안녕하세요 {name}
    </div>
  );
}

// 기본적으로 사용할 값 설정 default props
Hello.defaultProps = {
  name: "이름 없음",
};

export default Hello;
