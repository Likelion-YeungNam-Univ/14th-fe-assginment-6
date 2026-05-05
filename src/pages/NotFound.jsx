// src/pages/NotFound.jsx
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      <h1 className="text-7xl font-bold text-blue-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-500 mb-8">
        존재하지 않는 주소를 입력하셨거나,<br/>요청하신 페이지의 주소가 변경/삭제되었습니다.
      </p>
      <button 
        onClick={() => navigate(-1)} 
        className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        이전 페이지로 돌아가기
      </button>
    </div>
  );
}

export default NotFound;