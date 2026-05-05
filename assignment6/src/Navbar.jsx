// - **로그인 전**: [홈] 메뉴만 표시
// - **로그인 후**: [홈], [마이페이지] 메뉴가 표시됨
import { Link } from "react-router-dom";

export const Navbar = () => {
  const username = localStorage.getItem("username");
  const handleLogout = () => {
    localStorage.removeItem("username");
    alert("로그아웃 되었습니다.");
    window.location.href = "/"; // 홈으로 이동
  };

  if (username === null) {
    return (
      <nav className="p-4 bg-blue-200">
        <Link to="/">홈</Link>
      </nav>
    );
  } else {
    return (
      <nav className=" flex flex-row  gap-4 p-4 bg-blue-200">
        <ul>
          <li>
            <Link className="m-4" to="/">
              홈
            </Link>
            <Link to="/mypage">마이페이지</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>로그아웃</button>
      </nav>
    );
  }
};
