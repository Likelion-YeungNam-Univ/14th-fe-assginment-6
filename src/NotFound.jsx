import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-50">
            <div className="w-125 bg-white border-2 border-sky-200 rounded-3xl shadow-lg p-12 text-center">
                <h1 className="text-6xl font-black text-sky-500 mb-4">404</h1>
                <p className="text-lg text-gray-600 mb-8">
                    페이지를 찾을 수 없습니다
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-sky-400 hover:bg-sky-500 text-white font-bold px-8 py-3 rounded-full">
                    이전 페이지로 돌아가기
                </button>
            </div>
        </div>
    );
}

export default NotFound;