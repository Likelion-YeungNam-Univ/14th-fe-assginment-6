import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center px-4">
      <h1 className="text-9xl font-black text-emerald-500 select-none">404</h1>
      <div className="z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
        </p>
        <a
          className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1"
          onClick={() => navigate(-1)}
        >
          이전으로 돌아가기
        </a>
      </div>
    </div>
  );
};

export default NotFound;