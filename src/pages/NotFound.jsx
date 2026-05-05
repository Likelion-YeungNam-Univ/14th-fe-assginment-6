import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col items-center">
        <span className="text-sm font-bold text-gray-300 ">404</span>
        
        <h1 className="text-2xl font-light text-black m-5">
          페이지를 찾을 수 없습니다
        </h1>
        
        <button onClick={() => navigate(-1)} className="border border-black px-8 py-2 text-sm">
          이전 페이지로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default NotFound;