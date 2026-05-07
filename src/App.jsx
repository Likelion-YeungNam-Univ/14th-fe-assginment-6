import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import MyPage from "./MyPage";
import NotFound from "./NotFound";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  //useState로 로그인 상태 관리, false는 초기값을 의미하여 처음 로그인 안 된 상태를 나타냄.
  //isLogin은 로그인 상태를 나타내는 boolean 값(false면 로그인 안 됨/true면 됨), setIsLogin은 로그인 상태를 변경하는 함수임(true면 로그인 상태, false면 로그아웃 상태). 
  //쉽게 생각하면 isLogin은 현재 상태, setIsLogin은 스위치 누르는 버튼 상태로 변경할 수 있음.


  return (
    <BrowserRouter>
      <Routes>

        {/* Layout 영역 */}
        <Route path="/" element={<Layout isLogin={isLogin} setIsLogin={setIsLogin} />}>
          <Route index element={<Home isLogin={isLogin} />} />
          <Route path="mypage" element={<MyPage isLogin={isLogin} />} />
        </Route>

        {/* 단독 페이지 */}
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;