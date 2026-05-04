import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username;

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px] text-center">

        {username ? (
          <>
            <h1 className="text-2xl font-bold mb-2">
              환영합니다, <span className="text-yellow-500">{username}</span>님!
            </h1>
            <p className="text-gray-500 mb-6">
              서비스를 자유롭게 이용하세요 🙂
            </p>
          </>
        ) : (
          <>
            <h1 className="text-xl font-semibold mb-2">
              로그인이 필요합니다
            </h1>
            <p className="text-gray-400 mb-6">
              서비스를 이용하려면 로그인해주세요
            </p>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-yellow-300 hover:bg-yellow-400 text-black py-2 rounded-lg transition"
            >
              로그인 하러가기
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Home;