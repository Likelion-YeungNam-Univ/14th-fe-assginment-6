// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!id || !password) return alert('아이디와 비밀번호를 입력해주세요.');

    alert("로그인이 완료되었습니다!");
    login(id);

    setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      
      <form 
        onSubmit={handleLogin} 
        className="flex flex-col gap-4 bg-white p-8 border border-gray-200 rounded-xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-2">로그인</h2>
        
        <input 
          type="text" 
          placeholder="아이디를 입력하세요" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        
        <input 
          type="password" 
          placeholder="비밀번호를 입력하세요" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        
        <button 
          type="submit"
          className="cursor-pointer bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition mt-2"
        >
          로그인
        </button>
        
        <button 
          type="button" 
          onClick={() => navigate('/')}
          className="cursor-pointer text-gray-500 text-sm hover:text-gray-800 transition"
        >
          홈으로 돌아가기
        </button>
      </form>
    </div>
  );
}

export default Login;