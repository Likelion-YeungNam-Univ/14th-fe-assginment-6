import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./images/YU_LikeLion.png";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const inputId = e.target.userId.value;
    alert("로그인되었습니다.");

    setTimeout(() => {
      navigate("/", {
        replace: true,
        state: { isLoggedIn: true, userName: inputId },
      });
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="logo-wrapper">
        <img src={logo} alt="로고" />
        <h1 className="logo-text">Likelion 14th</h1>
        <p className="slogan">멋쟁이 사자처럼 FE</p>
      </div>

      <form onSubmit={handleLogin} className="login-form">
        <input
          name="userId"
          type="text"
          placeholder="아이디"
          required
          className="input-field"
        />
        <input
          name="userPw"
          type="password"
          placeholder="비밀번호"
          required
          className="input-field"
        />
        <button type="submit" className="login-btn">
          로그인
        </button>
      </form>

      <div className="footer-links">
        <span>회원가입</span>
        <span className="divider">|</span>
        <span>로그인</span>
      </div>
    </div>
  );
}

export default Login;
