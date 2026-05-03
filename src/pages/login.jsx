import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const ClickLogin = () => {
    const id = document.getElementById("loginID").value;

    localStorage.setItem("userName", id || "사용자")

    alert("로그인이 완료되었습니다!")

    setTimeout(() => {
      navigate("/", {replace : true});
    }, 2000);
  };


  
  return (
      <div className='w-full min-h-screen flex justify-center items-center bg-gray-300'>
        <div className='p-10 bg-white rounded-4xl border-4 border-gray-400 flex flex-col gap-9 justify-center items-center'>
          <div className='font-black text-3xl'>로그인</div>
        
          <div className='flex flex-col gap-3'>
            <input id="loginID" type="text" placeholder='아이디' className='p-3 w-90 rounded-2xl border-1 border-gray-400 bg-blue-50'></input>
            <input type="text" placeholder='비밀번호' className='p-3 w-90 rounded-2xl border-1 border-gray-400 bg-blue-50'></input>
          </div>

          <button type="button" onClick={ClickLogin} className="font-bold border-gray-600 border-1 p-3 rounded-2xl bg-green-50">
            로그인
          </button>
        </div>
        
      
        
      </div>
    )
}

export default Login