import React from "react";
import { useLocation } from "react-router-dom";
import "./MyPage.css";
import profile from "./images/profile.jpeg";

function MyPage() {
  const location = useLocation();
  const currentState = location.state || {};
  const userName = currentState.userName || "멋사";

  return (
    <div className="mypage-container">
      <div className="profile-card">
        <img src={profile} alt="프로필" />
        <h2 className="profile-name">{userName}님, 환영합니다.</h2>
        <p className="profile-role">멋쟁이 사자처럼 14기 프론트엔드</p>

        <div className="profile-group-info">
          <div className="info-item">
            <span className="info-label">아이디</span>
            <span className="info-value">{userName}</span>
          </div>
          <div className="info-item">
            <span className="info-label">가입일</span>
            <span className="indo-value">2026.04.27</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
