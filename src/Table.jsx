import React from 'react';

const Table = () => {
  const data = [
    { id: 1, name: '장원영', age: 20 },
    { id: 2, name: '이서', age: 18 },
    { id: 3, name: '가을', age: 22 },
    { id: 3, name: '리즈', age: 21 },
  ];
  const handleTableRowClick = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => handleTableRowClick(item)}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
