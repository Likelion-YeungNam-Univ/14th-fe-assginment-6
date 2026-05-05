// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Home() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      {isLoggedIn ? (
        <>
          <h2 className="text-2xl font-bold mb-2">
            환영합니다, {user?.name}님!
          </h2>
          <p className="text-gray-600 mb-6">이곳에서 [서비스 이용하기]를 진행해 보세요.</p>
          <button 
            className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            서비스 이용하기
          </button>
        </>): 
      
      (
        <>
          <h2 className="text-xl font-bold mb-4">
            서비스를 시작하려면 로그인하세요
          </h2>
          <button 
            onClick={() => navigate('/login')}
            className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            로그인 하러가기
          </button>
        </>
      )}
    </div>
  );
}

export default Home;