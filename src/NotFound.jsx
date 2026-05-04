import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl">페이지를 찾을 수 없습니다</h1>

      <button
        onClick={() => navigate(-1)}
      >
        이전 페이지로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;