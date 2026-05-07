import { useNavigate } from "react-router-dom";

function Login({ setIsLogin, setUsername }) {
  const navigate = useNavigate();

  const handleLogin = () => {

    setIsLogin(true);
    
    alert("로그인이 완료되었습니다!");
   // alert는 로그인 완료 메시지를 사용자에게 보여주는 역할을 함. 로그인 버튼을 클릭하면 "로그인이 완료되었습니다!"라는 메시지가 팝업으로 나타남.
   
    setTimeout(() => {
      navigate("/", { replace: true });   // replace: true는 로그인 페이지 기록 삭제(false면 로그인 페이지 기록 남김)
    }, 2000);   //2000ms=2초 
  };

  return (
    //w-full: 너비 100% 잘 안 씀.
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>

        <input
          type="text"
          placeholder="아이디"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-400 text-white py-2 rounded"
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;