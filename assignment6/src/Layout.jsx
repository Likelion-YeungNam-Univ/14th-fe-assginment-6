import { Outlet } from "react-router-dom"; //outlet
import { Navbar } from "./Navbar";

// Layout 컴포넌트 내부에 Navbar와 Outlet을 배치
// function component
export const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};
