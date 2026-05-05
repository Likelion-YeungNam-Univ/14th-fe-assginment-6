import { useNavigate } from "react-router-dom";

const Home = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
      {isLoggedIn ? (
        <>
          <h1 className="text-4xl font-bold text-orange-700">
            환영합니다, {username}님!
          </h1>
          <p className="text-gray-500 text-lg">
            아래 버튼을 눌러 서비스를 이용해 보세요.
          </p>
          <button
            onClick={() => navigate("/mypage")}
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700"
          >
            서비스 이용하기
          </button>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-gray-800">
            서비스를 시작하려면 로그인하세요
          </h1>
          <p className="text-gray-400 text-lg">
            로그인 후 다양한 서비스를 이용할 수 있습니다.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700"
          >
            로그인 하러가기
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
