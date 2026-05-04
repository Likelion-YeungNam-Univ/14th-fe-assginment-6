import React from 'react'
import { data, Link, useNavigate } from 'react-router-dom'

const login = ({ userId, setUserId, password, setPassword }) => {
  
  const navigate = useNavigate();
  const isLogin = (setUserId !== null) ? true : false;  
  const CheckLogin = () => {
    try{
      alert(userId + '님 로그인이 완료되었습니다.')
      setTimeout(() => {navigate('/', {replace: true})}, 2000);
    } catch(error){
      alert("로그인에 실패하였습니다.")
    }
  }
  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center flex-col gap-10"> 
       <div className="w-[300px] h-[300px] rounded-full bg-emerald-500 justify-center items-center flex flex-col gap-4">
        <p className="text-white text-3xl font-bold">Login</p>
        <input className="rounded-md px-4 py-2 border-[1px] border-white"
          type="text"
          placeholder="ID"
          value={userId || ''}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input className="rounded-md px-4 py-2 border-[1px] border-white"
          type="password"
          placeholder="Password"
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="px-4 py-2 bg-white rounded-md font-bold text-emerald-500 hover:bg-gray-200 transition-colors transform hover:-translate-y-1" onClick={CheckLogin}>
          Login
        </button>
      </div>  
    </div>
  )
}

export default login