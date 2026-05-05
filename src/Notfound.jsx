import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center px-4 gap-4">
      <h1 className="text-9xl font-black text-orange-400 select-none">404</h1>
      <h2 className="text-3xl font-bold text-slate-800">페이지를 찾을 수 없습니다</h2>
      <p className="text-slate-500 max-w-md">
        요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
      </p>
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50"
        >
          이전 페이지로 돌아가기
        </button>
        <a
          href="/"
          className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700"
        >
          홈으로 이동
        </a>
      </div>
    </div>
  );
};

export default NotFound;
