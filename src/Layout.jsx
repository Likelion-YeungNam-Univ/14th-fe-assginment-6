import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ isLogin, setIsLogin }) {
  return (
    <>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Outlet />
    </>
  );
}

export default Layout;