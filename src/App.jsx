import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*네비바가 있는 레이아웃*/}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
