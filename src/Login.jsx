import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!inputId || !inputPw) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", inputId);

    alert("로그인이 완료되었습니다!");

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-sm flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center text-orange-700">로그인</h1>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 font-medium">아이디</label>
          <input
            type="text"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            placeholder="아이디를 입력하세요"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 font-medium">비밀번호</label>
          <input
            type="password"
            value={inputPw}
            onChange={(e) => setInputPw(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <button
          onClick={handleLogin}
          className="mt-2 w-full py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
