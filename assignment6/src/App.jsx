import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { MyPage } from "./Mypage";
import { Layout } from "./Layout";
import { Login } from "./Login";
import { NotFound } from "./NotFound";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 레이아웃 o */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage></MyPage>} />
        </Route>
        {/* 레이아웃 X */}
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
  );
};
