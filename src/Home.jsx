import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isLogin, username } = location.state || {
    isLogin: false,
    username: 'NULL',
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <section className="w-[480px] h-[320px] bg-gray-400 shadow-xl rounded-3xl p-10 mb-10">
        <div>
          {isLogin ? (
            <div className="flex flex-col justify-center items-center mt-12 gap-20">
              <div className="flex">
                <span className="text-[20px] font-bold max-w-[200px] truncate">
                  {username}
                </span>
                <span className="text-[20px] font-bold ml-2">님,</span>
              </div>

              <p className="text-[20px] font-bold">환영합니다!</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mt-12 gap-20">
              <p className="text-[20px] font-bold">
                서비스를 시작하려면 로그인을 하세요.
              </p>
              <button
                className="text-[32px] bg-gray-800 p-4 rounded-2xl shadow-xl hover:bg-black hover:text-white transition-colors duration-1000"
                onClick={() => navigate('/login')}
              >
                로그인 하러 가기
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
