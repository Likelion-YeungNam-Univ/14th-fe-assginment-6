import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NotFound from './NotFound'; 

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const toHome = (e) => {
    e.preventDefault();
    alert("로그인이 완료되었습니다!");
    setUser({ id: id });

    setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-5xl mb-5 font-bold">LOGIN</h2>
      <form onSubmit={toHome} className="flex flex-col gap-3">
        <input className="py-2 w-64 h-12 bg-white border justify-between border-gray-200 shadow-lg rounded-3xl px-4" placeholder="ID" 
          value={id}
          onChange={(e) => setId(e.target.value)}
          required />
        <input className="py-2 w-64 h-12 bg-white border justify-between border-gray-200 shadow-lg rounded-3xl px-4" type="password" placeholder='PASSWORD' required />
        <button type="submit" className="border bg-black text-white py-2">LOGIN</button>
      </form>
    </div>
  )
}

export default Login;