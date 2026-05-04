import { useNavigate } from "react-router-dom";

function MyPage() {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName");

    if (userName === null) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-sky-50">
                <div className="w-[500px] bg-white border-2 border-sky-200 rounded-3xl shadow-lg p-12 text-center">
                    <h1 className="text-3xl font-bold text-sky-500 mb-4">
                        로그인이 필요합니다
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        마이페이지는 로그인 후 이용할 수 있습니다.
                    </p>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-sky-400 hover:bg-sky-500 text-white font-bold px-8 py-3 rounded-full"
                    >
                        로그인 하러가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-50">
            <div className="w-[500px] bg-white border-2 border-sky-200 rounded-3xl shadow-lg p-12 text-center">
                <h1 className="text-3xl font-bold text-sky-500 mb-6">마이페이지</h1>

                <div className="bg-sky-100 rounded-2xl p-8">
                    <p className="text-gray-600 mb-2">환영합니다</p>
                    <p className="text-2xl font-bold text-sky-600 mb-4">
                        {userName}님!
                    </p>
                    <p className="text-gray-600">
                        로그인한 사용자의 프로필 정보입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyPage;