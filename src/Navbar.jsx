import { Link } from "react-router-dom";

function Navbar({ isLogin, setIsLogin }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600">MyApp</h1>

      <div className="space-x-4">
        <Link to="/">홈</Link>

        {isLogin && (
          <>
            <Link to="/mypage">마이페이지</Link>
            <button
              onClick={() => setIsLogin(false)}
              className="text-red-500"
            >
              로그아웃
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;