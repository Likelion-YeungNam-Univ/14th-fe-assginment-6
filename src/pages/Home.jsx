import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = location.state?.isLoggedIn || false;
  const userName = location.state?.userName || " ";

  return (
    <div className="home-container">
      {isLoggedIn ? (
        <>
          {/* 로그인 상태 일때 */}
          <h2>환영합니다. {userName}님!</h2>
          <button
            className="action-btn"
            onClick={() => alert("서비스로 이동합니다.")}
          >
            서비스 이용하기
          </button>
        </>
      ) : (
        <>
          {/* 로그인 상태가 아닐때 */}
          <h2>서비스를 시작하려면 로그인하세요</h2>
          <button className="action-btn" onClick={() => navigate("/login")}>
            로그인 하러가기
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
