import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username;

  return (
    <div className="p-10">

      {username ? (
        <>
          <h1 className="text-2xl font-bold">
            환영합니다, {username}님!
          </h1>
          <p>서비스를 자유롭게 이용하세요.</p>
        </>
      ) : (
        <>
          <h1 className="text-xl">
            서비스를 시작하려면 로그인하세요
          </h1>

          <button
            onClick={() => navigate("/login")}
          >
            로그인 하러가기
          </button>
        </>
      )}

    </div>
  );
};

export default Home;