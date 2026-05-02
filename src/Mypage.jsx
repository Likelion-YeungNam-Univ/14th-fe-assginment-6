import React from 'react';
import { useLocation } from 'react-router-dom';

const Mypage = () => {
  const location = useLocation();

  const username = location.state.username || {
    username: 'guest',
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <section className="w-[480px] h-[320px] bg-gray-400 shadow-xl rounded-3xl p-10 mb-10">
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-[32px] font-black text-white mb-8 border-b-2 border-gray-800 pb-2">
            MY PROFILE
          </h2>

          <div className="flex flex-col gap-6 w-full items-center">
            <div className="flex flex-row items-end gap-2">
              <span className="text-gray-800 font-bold text-[18px]">
                사용자명:
              </span>
              <span className="text-[24px] font-black text-white max-w-[200px] truncate">
                {username}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mypage;
