import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName");

    const handleLogout = () => {
        localStorage.removeItem("userName");
        alert("로그아웃되었습니다.");
        navigate("/");
        window.location.reload();
    };

    return (
        <nav className="h-16 bg-sky-200 px-8 flex items-center gap-8 shadow-md">
            <Link
                to="/"
                className="bg-white text-sky-600 font-bold px-5 py-2 rounded-full hover:bg-sky-400 hover:text-white">
                홈
            </Link>

            {userName !== null && (
                <>
                    <Link
                        to="/mypage"
                        className="bg-white text-sky-600 font-bold px-5 py-2 rounded-full hover:bg-sky-400 hover:text-white">
                        마이페이지
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="bg-sky-500 text-white font-bold px-5 py-2 rounded-full hover:bg-sky-600">
                        로그아웃
                    </button>
                </>
            )}
        </nav>
    );
}

export default Navbar;