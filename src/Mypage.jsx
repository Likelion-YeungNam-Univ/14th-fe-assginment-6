const MyPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px] text-center">

        <h1 className="text-2xl font-bold mb-6">마이페이지</h1>

        {user ? (
          <>
            <div className="mb-4">
              <p className="text-gray-400 text-sm">아이디</p>
              <p className="text-xl font-semibold text-yellow-500">
                {user.username}
              </p>
            </div>

            <button
              onClick={() => alert("추가 기능은 아직입니다 😄")}
              className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-lg transition"
            >
              설정
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-500 mb-6">
              로그인 정보가 없습니다
            </p>

            <button
              onClick={() => (window.location.href = "/login")}
              className="w-full bg-yellow-300 hover:bg-yellow-400 py-2 rounded-lg transition"
            >
              로그인 하러가기
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default MyPage;