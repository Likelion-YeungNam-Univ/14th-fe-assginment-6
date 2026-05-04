import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const userdata = location.state;
    return (
        <nav className="w-full p-4 bg-blue-900 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center">
                <Link to="/" state={userdata}className="mr-6 hover:text-emerald-400 font-bold">
                홈
                </Link>

            {userdata && (
                <Link to="/mypage" state={userdata} className="mr-4 hover:text-emerald-400">
                마이페이지
                </Link>
            )}
            {userdata && (
                <Link to="/" state={null} onClick={()=>alert("로그아웃되었습니다")} className="px-4 py-1 rounded bg-red-600 transition-colors text-sm font-bold">
                로그아웃
                </Link>
            )}
            </div>
        </nav>
  );
};

export default Navbar;