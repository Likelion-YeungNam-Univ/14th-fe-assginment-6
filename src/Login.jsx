import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (id.trim() === "" || password.trim() === "") {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }

        localStorage.setItem("userName", id);
        alert("로그인이 완료되었습니다!");

        setTimeout(() => {
            navigate("/", { replace: true });
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-50">
            <div className="w-125 bg-white border-2 border-sky-200 rounded-3xl shadow-lg p-12 text-center">
                <h1 className="text-3xl font-bold text-sky-500 mb-8">Login</h1>

                <input
                    type="text"
                    placeholder="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full border-2 border-sky-200 rounded-xl px-4 py-3 mb-4 outline-none focus:border-sky-400"
                />

                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-2 border-sky-200 rounded-xl px-4 py-3 mb-6 outline-none focus:border-sky-400"
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold py-3 rounded-full"
                >
                    로그인
                </button>
            </div>
        </div>
    );
}

export default Login;