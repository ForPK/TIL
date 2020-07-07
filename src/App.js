import React, { useRef, useState } from "react";
import UserList from "./UserList.js";
import CreateUser from "./CreateUser.js";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //const users = [ 이걸 컴포넌트 상태로서 관리 (userState로 감싸기)
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "ForPK",
      email: "Blah0",
    },
    {
      id: 2,
      username: "ys",
      email: "Blah1",
    },
    {
      id: 3,
      username: "sy",
      email: "Blah2",
    },
  ]);
  // 배열에 값을 추가하려면 push splice sort 사용 x
  // 꼭 사용을 해야한다면 배열을 한 번 복사하기
  // 기존의 배열을 바꾸지 않으면서 새로운 배열을 만들면서
  //거기에 변화를 주는 방식으로 구현을 해줘야함
  // 배열 불변성 지키려면 ...spread연산자, concat

  // 위에 3까지 있으니
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

//useRef는 특정 돔을 선택하고 싶을때도 사용할 수 있지만
// 변수를 계속 기억하고 싶을때
// useRef로 관리하는 값은 바뀌어도 컴포넌드가 리렌더링 되지 않음
export default App;
