import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl mb-4">404</h1>
      <p className="mb-4">페이지를 찾을 수 없습니다</p>

      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2  text-black rounded"
      >
        이전 페이지로 돌아가기    //*navigate(-1)은 브라우저의 이전 페이지로 이동하는 기능을 수행.
      </button>
    </div>
  );
}

export default NotFound;