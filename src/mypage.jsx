import React from 'react'

const mypage = ({setUserId, userId}) => {
  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center flex-col gap-10">
      <div className="w-[300px] h-[300px] rounded-full bg-emerald-500 justify-center items-center flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-white">마이페이지</h1>
        <p className="text-white">안녕하세요, {userId}님!</p>
      </div>
    </div>
  )
}

export default mypage