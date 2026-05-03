import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-300'>
        <div className='p-10 bg-white rounded-4xl border-4 border-gray-400 flex flex-col gap-9 justify-center items-center'>
          <div className="text-9xl font-black text-blue-500">404</div>
          <div className="text-5xl font-black text-gray-400">페이지를 찾을 수 없습니다.</div>
          <button type="button" onClick={back} className="bg-blue-50 font-bold p-3 rounded-2xl border-2 border-gray-300">이전 페이지로 돌아가기</button>
        </div>
    </div>
  );
};

export default NotFound;