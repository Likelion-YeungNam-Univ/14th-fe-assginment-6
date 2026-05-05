import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ user }) => {
  return (
    <div className="p-8">
      {!user ? (
        <div>
            <div className="flex flex-col items-center justify-center h-200">
            <h1 className="text-3xl mb-10">서비스를 시작하려면 로그인하세요</h1>
            <Link to="/login">
                <button className="py-2 w-64 h-12 bg-white border justify-between border-gray-200 shadow-lg rounded-3xl px-4">
                로그인 하러가기
                </button>
            </Link>
            </div>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-gray-50 p-6">
          <h1 className="text-xl mb-4">환영합니다, {user.id}님!</h1>
          <p className="text-gray-700 font-bold">[서비스 이용하기]</p>
        </div>
      )}
    </div>
  )
}
export default Home