// src/pages/MyPage.jsx
import { useAuth } from '../contexts/AuthContext';

function MyPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center border-b-2 border-gray-100 pb-4 mb-6">
        마이페이지
      </h2>
      <div className="space-y-4">
        <div>
          <span className="text-gray-500 text-sm">이름</span>
          <p className="text-xl font-bold mt-1">{user?.name}</p>
        </div>
        <div>
          <span className="text-gray-500 text-sm">계정 상태</span>
          <p className="text-blue-500 font-semibold mt-1">
            현재 로그인 중
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyPage;