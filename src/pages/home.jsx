import { Link } from "react-router-dom"


const Home = () => {
  const username = localStorage.getItem("userName")

  if (username) {
    return (
      <div className="w-full min-h-screen flex flex-col  justify-center items-center bg-gray-300">
        <div className="p-30 bg-white rounded-4xl border-4 border-gray-400 flex flex-col gap-15 justify-center items-center">
          <div className="font-black text-3xl">환영합니다, {username}님!</div>
    
          <div className="p-5 font-bold text-xl bg-white rounded-4xl border-4 border-gray-400 flex flex-col gap-30 justify-center items-center">
            서비스 이용 안내
          </div>
        
      </div>
    </div>
    )
  }

  return (
    <div className="w-full min-h-screen flex flex-col  justify-center items-center bg-gray-300">
      <div className="p-10 bg-white rounded-4xl border-4 border-gray-400 flex flex-col gap-30 justify-center items-center">
        <div className="font-black text-3xl">서비스를 이용하시려면 로그인 하세요.</div>
    

        <Link to="/login" className="font-bold border-gray-600 border-1 p-3 rounded-2xl bg-blue-300">
          로그인 하러 가기
        </Link>
      </div>
      
    </div>
  );
};
  


export default Home;