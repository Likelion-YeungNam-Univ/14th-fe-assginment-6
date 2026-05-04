import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">

      {/* 왼쪽 */}
      <div className="flex items-center gap-6 text-lg font-semibold">
        <Link to="/" className="hover:text-yellow-500 transition">
          홈
        </Link>

        {isLoggedIn && (
          <Link to="/mypage" className="hover:text-yellow-500 transition">
            마이페이지
          </Link>
        )}
      </div>

      {/* 오른쪽 */}
      <div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
            className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-1 rounded-lg transition"
          >
            로그아웃
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-lg transition"
          >
            로그인
          </Link>
        )}
      </div>

    </nav>
  );
};

export default Navbar;