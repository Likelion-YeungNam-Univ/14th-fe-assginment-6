import React from 'react'
import { Link } from 'react-router-dom' // Link 추가
import profile from './image_1.png'

const Mypage = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">MY PAGE</h1>

      <div className="w-sm bg-white border border-gray-100 shadow-xl rounded-3xl p-10 flex flex-col items-center">
        <img src={profile} className="w-30" />
        <h2 className="text-2xl font-bold text-gray-800 m-5">{user?.id}</h2>

        <div className="w-full space-y-3">
          <button className="w-full py-4 bg-black text-white rounded-2xl hover:bg-gray-800">프로필 편집</button>
          <button className="w-full py-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50">설정</button>

          <Link to="*" className="block w-full">
            <button className="w-full py-4 bg-gray-200 text-gray-600 rounded-2xl hover:bg-gray-300">404</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Mypage