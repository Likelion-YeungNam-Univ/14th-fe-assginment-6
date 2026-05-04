import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import MyPage from "./MyPage";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout 적용 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>

        {/* Layout 제외 */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;