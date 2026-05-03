import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const username = localStorage.getItem("userName");

    const ClickLogout = () => {
        localStorage.removeItem("userName");

        navigate("/", {replace : true});

        window.location.reload();
    }

    if (username) {
        return (
            <div className="w-full h-16 flex justify-center items-center gap-3 border-b bg-white">
                <Link to="/" className="px-5 w-auto h-10 rounded-2xl border border-gray-600 flex justify-center items-center bg-blue-50 font-bold">
                    홈
                </Link>
                <Link to="/mypage" className="px-5 w-auto h-10 rounded-2xl border border-gray-600 flex justify-center items-center bg-blue-50 font-bold">
                    마이페이지
                </Link>
                <button type="button" onClick={ClickLogout} className="px-5 w-auto h-10 rounded-2xl border border-gray-600 flex justify-center items-center bg-blue-50 font-bold">
                    로그아웃
                </button>
            </div>
        );
    }


    return (
        <div className="w-full h-16 flex justify-center items-center border-b bg-white">
            <Link to="/" className="px-5 w-auto h-10 rounded-2xl border border-gray-600 flex justify-center items-center bg-blue-50 font-bold">
                홈
            </Link>
        </div>
    );
};

export default Navbar;