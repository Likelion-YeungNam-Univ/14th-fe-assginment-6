import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = ({setUserId, userId}) => {
  
  const location = useLocation();
  const isLogin = (userId === null) ? false : true;

  if (isLogin === false) {
    return (
      <div className="flex h-screen bg-gray-100 items-center justify-center flex-col gap-10"> 
        <div className="flex justify-center ">
          <h1 className="text-4xl font-bold">서비스를 이용하실려면 로그인해주세요</h1>
        </div> 
        <Link to="/login">
          <button className="px-4 py-2 bg-emerald-500 rounded-md font-bold text-white hover:bg-emerald-600 ">
            로그인 하러가기
          </button>
        </Link>
      </div>
    ) 
  } 
  else{   
    return (
      <div className="flex h-screen bg-gray-100 items-center justify-center flex-col gap-10"> 
        <div className="flex justify-center ">
          <h1 className="text-4xl font-bold">{userId}님 환영합니다~~</h1>
        </div> 
      </div>
    );
  }
};

export default Home
