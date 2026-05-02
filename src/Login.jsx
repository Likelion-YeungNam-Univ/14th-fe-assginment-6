import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [username, setUsername] = useState('');

  const labelStyle = 'font-bold text-sm text-white ml-1';
  const inputStyle =
    'border-[1px] border-gray-300 rounded-xl p-2.5 outline-none focus:border-gray-800 transition-all placeholder:text-[10px] placeholder:text-gray-500';
  const placeholderText = '8자 이상 12자 이하..';

  const isIdValid = id.length >= 8 && id.length <= 12;
  const isPwValid = pw.length >= 8 && pw.length <= 12;
  const isNameValid = username.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isIdValid && isPwValid && isNameValid) {
      alert('로그인이 완료되었습니다!');

      setTimeout(() => {
        navigate('/', {
          replace: true,
          state: { isLogin: true, username: username },
        });
      }, 2000);
    } else {
      alert('조건에 맞춰주세요! (ID/PW 8~12자, 이름 필수)');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <section className="w-[360px] h-[480px] bg-gray-400 shadow-xl rounded-3xl p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h2 className="text-2xl font-black text-white text-center mb-2">
            LOGIN
          </h2>

          <div className="flex flex-col gap-1.5">
            <p className={labelStyle}>USERNAME</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputStyle}
              placeholder="이름을 입력해주세요"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <p className={labelStyle}>ID</p>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className={`${inputStyle} ${id && !isIdValid ? 'border-red-500' : ''}`}
              placeholder={placeholderText}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <p className={labelStyle}>PW</p>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className={`${inputStyle} ${pw && !isPwValid ? 'border-red-500' : ''}`}
              placeholder={placeholderText}
            />
          </div>

          <button
            type="submit"
            className="py-3 rounded-2xl shadow-lg font-bold transition-all duration-500 mt-4 bg-gray-800 text-white hover:bg-black cursor-pointer"
          >
            로그인
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
