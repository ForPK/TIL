import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
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
  ];

  return (
    // 같은 걸 세 개 써야하니깐 컴포넌트로
    // <div>
    //   <b>{user[0].username}</b> <span>({users[0].email})</span>
    // </div>
    // <div>
    //     <b>{user[1].username}</b> <span>({users[1].email})</span>
    // </div>
    // <div>
    //     <b>{user[2].username}</b> <span>({users[2].email})</span>
    // </div>
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}

      {user.map((user) => (
        <User user={user} key={user.id} />
      ))}
      {/* 키 값을 index로 줄 순 있지만 비효율적 */}
    </div>
  );
}

export default UserList;
