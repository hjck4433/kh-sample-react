// const User = (props) => {
//   return (
//     <>
//       <div>
//         <b>{props.user.userName}</b> <span>{props.user.email}</span>
//       </div>
//     </>
//   );
// };

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: '천지훈',
      email: '1000won@gmail.com',
    },
    {
      id: 200,
      userName: '백마리',
      email: '2000won@gmail.com',
    },
    {
      id: 300,
      userName: '서민혁',
      email: '3000won@gmail.com',
    },
  ];

  const seasons = ['새로운 봄', '활기찬 여름', '풍성한 가을', '새하얀 겨울'];
  const newSeasons = seasons.map((e, index) => <li key={index}>{e}</li>);

  // key 값은 유일값이어야함 ex> usderId, 고유번호 ...
  //   const newUsers = users.map((user) => (
  //     <div key={user.email}>
  //       <b>{user.userName}</b> <span>{user.email}</span>
  //     </div>
  //   ));

  return (
    <>
      <h1>천원짜리 변호사 직원 리스트</h1>
      {/* users값이 있을 때 렌더링 */}
      {users &&
        users.map((user) => (
          <div key={user.email}>
            <b>{user.userName}</b> <span>{user.email}</span>
          </div>
        ))}
      <h1>계절 표시</h1>
      <ul>{newSeasons}</ul>
      {/* {newUsers} */}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
    </>
  );
};
export default UserList;
