import React from "react";

function Hello({ color, name }) {
  return (
    <div
      style={{
        color,
      }}
    >
      안녕하세요 {name}
    </div>
  );
}

// 기본적으로 사용할 값 설정 default props
Hello.defaultProps = {
  name: "이름 없음",
};

export default Hello;
