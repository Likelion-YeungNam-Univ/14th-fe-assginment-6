import { Link } from "react-router-dom";
import { useState } from "react";


 function Home({ isLogin }) {

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      {isLogin ? (
        <>
          <h1 className="text-3xl font-bold mb-4">환영합니다, ooo 님!</h1>
          <Link
            to="/mypage"
            className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
          >
            서비스 이용하기
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">
            서비스를 시작하려면 로그인하세요
          </h1>
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
          >
            로그인 하러가기
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;