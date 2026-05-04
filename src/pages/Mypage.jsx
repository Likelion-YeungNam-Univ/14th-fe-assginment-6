import React from "react";
import { useLocation } from "react-router-dom";

const Mypage = () => {
  const location = useLocation();
  const userData = location.state;

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 border-b pb-2">마이페이지</h1>
        {userData ? (
          <>
            <p className="text-gray-700 mb-2 font-bold">환영합니다, {userData.username}님!</p>
            <p className="text-sm text-gray-500">아이디: {userData.username}</p>
            <p className="text-sm text-gray-500">비밀번호: {userData.password}</p>
          </>
        ) : (
          <p className="text-red-500">로그인 정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Mypage;