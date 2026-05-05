import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <nav className="border-b border-gray-300 text-white px-6 py-4 flex items-center justify-end">
      <div className="flex gap-4 items-center">
        <Link to="/" className="text-black font-bold hover:underline">홈</Link>

        {isLoggedIn && (
          <>
            <Link to="/mypage" className="text-black font-bold hover:underline">마이페이지</Link>
            <button
              onClick={handleLogout}
              className="bg-white text-black font-bold px-3 py-1 rounded hover:bg-orange-50"
            >
              로그아웃
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
