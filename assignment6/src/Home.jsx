import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate(); // 훅 사용
  const username = localStorage.getItem("username");

  return (
    <>
      {username === null ? (
        <>
          <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="p-4 m-4 font-bold text-2xl text-center">
              서비스를 시작하려면 로그인하세요
            </h2>
            <button
              className="text-2xl text-center  bg-blue-500 text-white p-2 rounded"
              onClick={() => navigate("/login")}
            >
              로그인 하러가기
            </button>
          </div>
        </>
      ) : (
        //   로그인 후
        <>
          <div>환영합니다{username}님!</div>
          <div>서비스 이용하기</div>
        </>
      )}{" "}
    </>
  );
};
