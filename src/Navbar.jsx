import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const isLoggedIn = !!user;

  return (
    <nav>

      <Link to="/">홈</Link>

      {isLoggedIn && <Link to="/mypage">마이페이지</Link>}

      {isLoggedIn ? (
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
        >
          로그아웃
        </button>
      ) : null}

    </nav>
  );
};

export default Navbar;