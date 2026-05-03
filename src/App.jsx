import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Mypage from "./pages/mypage"
import NotFound from "./pages/Notfound"
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;