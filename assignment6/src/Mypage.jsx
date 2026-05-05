import { useNavigate } from "react-router-dom";

//프로필 보여주기

export const MyPage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  if (username === null) {
    alert("로그인이 필요한 페이지입니다.");
    navigate("/login", { replace: true });
    return null;
  }
  return (
    <>
      <h1>{username}님의 마이페이지입니다.</h1>
    </>
  );
};
