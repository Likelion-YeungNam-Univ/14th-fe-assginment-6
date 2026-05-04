import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const username = location.state && typeof location.state.username === 'string' 
                   ? location.state.username 
                   : null;

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      {username ? (
        <div className="text-center">
          <h1 className="text-3xl text-emerald-600">환영합니다, {username}님!</h1>
        </div>
      ) : (
        <div className="text-center gap-y-4 flex flex-col items-center">
          <h1>서비스를 시작하려면 로그인하세요</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => navigate("/login")}>
            로그인하러가기
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;