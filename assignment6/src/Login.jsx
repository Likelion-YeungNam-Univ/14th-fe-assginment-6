import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); /// 폼 제출 시 페이지 새로고침 방지
    if (id.trim() === "" || pw.trim() === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    localStorage.setItem("username", id);
    alert("로그인 성공!");
    // 2s 후 홈으로 이동 , 뒤로가기 막기
    console.log(id);
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  };
  return (
    <>
      <form className="flex flex-col items-center  bg-blue-200 justify-center h-screen gap-4">
        {" "}
        <input
          className="p-2 rounded border bg-white border-gray-600"
          type="text"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <input
          className="p-2 rounded border bg-white border-gray-600"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        ></input>
        <button
          onClick={handleLogin}
          className="p-2 rounded border bg-black text-white border-gray-400"
        >
          로그인
        </button>
      </form>
    </>
  );
};
