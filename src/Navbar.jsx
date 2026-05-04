import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({setUserId, userId, setPassword, password}) => {
  const isLogin = (userId !== null) ? true : false;
  if (isLogin === false) {
      return (
        <nav className="gap-4 flex h-[50px] items-center text-[20px] font-bold bg-emerald-500 text-white px-4 border-[1px] border-b-white">
          <Link to="/">홈</Link>
        </nav>
      );
  } 
  else{
    return (
      <nav className="gap-4 flex h-[50px] items-center text-[20px] font-bold bg-emerald-500 text-white px-4 border-[1px] border-b-white">
        <Link to="/">홈</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/" onClick={() => {setUserId(null); setPassword(null);} }>로그아웃</Link>
      </nav>
    );
  }
};

export default Navbar;
