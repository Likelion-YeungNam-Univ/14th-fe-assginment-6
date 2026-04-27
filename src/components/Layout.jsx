import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Layout.css";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentState = location.state || {};
  const isLoggedIn = currentState.isLoggedIn || false;

  const handleLogout = () => {
    navigate("/", { replace: true, state: { isLoggedIn: false } });
  };

  return (
    <div className="Layout-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" state={currentState}>
            홈
          </Link>
          {isLoggedIn && (
            <Link to="/mypage" state={currentState}>
              마이페이지
            </Link>
          )}
        </div>
        {isLoggedIn && (
          <button className="logout-btn" onClick={handleLogout}>
            로그아웃
          </button>
        )}
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
