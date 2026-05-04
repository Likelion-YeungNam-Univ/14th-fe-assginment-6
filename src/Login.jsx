import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/src/images/YU_LikeLion.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.username.trim() || !formData.password.trim()) 
    { alert("아이디와 비밀번호를 입력해주세요!");
      return; }
      
    alert("로그인이 완료되었습니다!");

    localStorage.setItem(
      "user",
      JSON.stringify({ username: formData.username })
    );

    setTimeout(() => {
      navigate("/", {
        state: { username: formData.username },
        replace: true
      });
    }, 2000);
  };

  return (
    <div className="bg-amber-100 min-h-screen flex items-center justify-center">
      <div className="flex bg-white p-10 rounded-2xl shadow-md w-[1000px] h-[400px]">
      {/* 왼쪽 로고 + 로그인 텍스트 */}
      <div className="flex flex-col justify-start items-start w-1/2 gap-5">
        <img src={Logo} alt="Logo" className="w-15 mb-4" />
        <div className="justify-left text-black text-4xl font-light">로그인</div>
      </div>

      <form onSubmit={handleSubmit} className="w-1/2 flex flex-col justify-center space-y-4">       
         <input
          name="username"
          placeholder="아이디"
          onChange={handleChange}
          className="bg-white border-2 border-gray-300 p-3 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          className="bg-white border-2 border-gray-300 p-3 rounded-lg"
        />

        <button className="font-light text-md bg-yellow-300 text-black px-4 py-2 rounded-2xl">
          로그인
        </button>

      </form>
    </div>
    </div>
  );
};

export default Login;