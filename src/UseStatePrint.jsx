import { useState } from 'react';

const InputInfo = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [addr, setAddr] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const info = [
    {
      name: name,
      job: job,
      company: company,
      addr: addr,
      email: email,
      phone: phone,
    },
  ];

  const setList = [setName, setJob, setCompany, setAddr, setEmail, setPhone];

  const onChange = (type, val) => {
    setList[type](val);
    console.log(info);
  };

  const onClick = () => {};

  return (
    <>
      <input
        type="text"
        className="name"
        value={name}
        placeholder="이름을 입력 해 주세요"
        onChange={(e) => onChange(0, e.target.value)}
      />
      <br />
      <input
        type="text"
        className="job"
        value={job}
        placeholder="직책을 입력 해 주세요"
        onChange={(e) => onChange(1, e.target.value)}
      />
      <br />
      <input
        type="text"
        className="company"
        vlaue={company}
        placeholder="회사명을 입력 해 주세요"
        onChange={(e) => onChange(2, e.target.value)}
      />
      <br />
      <input
        type="text"
        className="addr"
        value={addr}
        placeholder="회사주소을 입력 해 주세요"
        onChange={(e) => onChange(3, e.target.value)}
      />
      <br />
      <input
        type="email"
        className="email"
        value={email}
        placeholder="이메일을 입력 해 주세요"
        onChange={(e) => onChange(4, e.target.value)}
      />
      <br />
      <input
        type="text"
        className="phone"
        value={phone}
        placeholder="전화번호를 입력 해 주세요"
        onChange={(e) => onChange(5, e.target.value)}
      />
      <br />

      <button>입력!</button>
    </>
  );
};

const PrintInfo = () => {
  return (
    <>
      <InputInfo />
      <h1>정보출력</h1>
    </>
  );
};
export default PrintInfo;
