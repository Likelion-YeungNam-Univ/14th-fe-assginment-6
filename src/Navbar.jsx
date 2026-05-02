import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentState = location.state || {};
  const isLogin = currentState.isLogin || false;

  const handleLogout = () => {
    alert('로그아웃 되었습니다.');
    navigate('/', { replace: true, state: { isLogin: false } });
  };

  const linkStyle =
    'h-full w-auto p-4 bg-none text-center rounded-3xl hover:bg-gray-800 hover:text-white transition-colors duration-500';

  return (
    <nav className="flex w-screen h-[60px] justify-between items-center border-b">
      {isLogin && (
        <Link to="/mypage" className={linkStyle} state={currentState}>
          Mypage
        </Link>
      )}

      <Link to="/" className={linkStyle} state={currentState}>
        Home
      </Link>

      {isLogin && (
        <button onClick={handleLogout} className={linkStyle}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
