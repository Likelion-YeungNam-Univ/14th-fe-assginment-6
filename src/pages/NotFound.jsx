import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">페이지를 찾을 수 없습니다</p>

      {/* navigate(-1)을 사용하여 바로 이전 방문 기록으로 돌아갑니다 */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        이전 페이지로 돌아가기
      </button>
    </div>
  );
}

export default NotFound;
