import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userdata, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    const field = placeholder === "아이디" ? "username" : "password";
    setFormData({ ...userdata, [field]: value });
  };

  const registerUser = async (data) => {
    return new Promise((resolve) => setTimeout(resolve, 500));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(null); 
      await registerUser(userdata);

      alert("로그인이 완료되었습니다!");

      setTimeout(() => {
        navigate("/", { 
          state: { 
            username: userdata.username,
            password: userdata.password
          },
          replace: true,
        });
      }, 2000);

    } catch (err) {
      setError(err.message || "로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      
      <input
        className="bg-gray-300 p-2 rounded"
        type="text"
        placeholder="아이디"
        onChange={handleChange}
      />
      <input
        className="bg-gray-300 p-2 rounded"
        type="password"
        placeholder="비밀번호"
        onChange={handleChange}
      />

      <button
        onClick={handleLogin}
        className="inline-block px-8 py-3 bg-gray-600 hover:bg-black text-white font-semibold rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
      >
        로그인
      </button>
    </div>
  );
};

export default Login;