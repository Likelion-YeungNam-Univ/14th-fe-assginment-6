import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          name="username"
          placeholder="아이디"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          className="border p-2"
        />

        <button>
          로그인
        </button>

      </form>
    </div>
  );
};

export default Login;