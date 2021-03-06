import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList.js";
import CreateUser from "./CreateUser.js";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  //const users = [ 이걸 컴포넌트 상태로서 관리 (userState로 감싸기)
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "ForPK",
      email: "Blah0",
      active: true,
    },
    {
      id: 2,
      username: "ys",
      email: "Blah1",
      active: false,
    },
    {
      id: 3,
      username: "sy",
      email: "Blah2",
      active: false,
    },
  ]);
  // 배열에 값을 추가하려면 push splice sort 사용 x 업데이트안됨
  // 꼭 사용을 해야한다면 배열을 한 번 복사하기
  // 기존의 배열을 바꾸지 않으면서 새로운 배열을 만들면서
  //거기에 변화를 주는 방식으로 구현을 해줘야함
  // 배열 불변성 지키려면 ...spread연산자, concat

  // 위에 3까지 있으니
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
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
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <p>활성 사용자 수 : {count}</p>
    </>
  );
}

//useRef는 특정 돔을 선택하고 싶을때도 사용할 수 있지만
// 변수를 계속 기억하고 싶을때
// useRef로 관리하는 값은 바뀌어도 컴포넌드가 리렌더링 되지 않음
// useMemo를 안쓰면 인풋에 입력되는 한 자, 한 자 적을때마다 count 셈
// [] 값을 안 넣으면 최신상태를 참조하는게 아니라 처음 렌더링된 상태를 참조하게 됨
export default App;
