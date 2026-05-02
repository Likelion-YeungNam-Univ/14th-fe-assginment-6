import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <section className="w-[480px] h-[320px] bg-gray-400 shadow-xl rounded-3xl p-10 mb-10 flex flex-col justify-center items-center">
        <h1 className="text-[100px] font-black text-white">404</h1>

        <p className="text-[20px] font-bold text-gray-800 mb-8">
          페이지를 찾을 수 없습니다.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3 bg-gray-800 text-white rounded-2xl font-bold shadow-lg hover:bg-black transition-all duration-300"
        >
          이전 페이지로 돌아가기
        </button>
      </section>
    </div>
  );
};

export default NotFound;
