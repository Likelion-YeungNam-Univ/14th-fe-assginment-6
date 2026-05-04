import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName");

    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-50">
            <div className="w-[500px] bg-white border-2 border-sky-200 rounded-3xl shadow-lg p-12 text-center">
                {userName === null ? (
                    <>
                        <h1 className="text-3xl font-bold text-sky-500 mb-4">
                            Welcome!
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            서비스를 시작하려면 로그인하세요
                        </p>
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-sky-400 hover:bg-sky-500 text-white font-bold px-8 py-3 rounded-full"
                        >
                            로그인 하러가기
                        </button>
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-sky-500 mb-4">
                            환영합니다, {userName}님!
                        </h1>
                        <p className="text-lg text-gray-600">서비스 이용하기</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;