const MyPage = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="flex flex-col items-center py-16 gap-6">
      <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-orange-700 mb-2">마이페이지</h1>
        <p className="text-gray-500 mb-6">환영합니다, {username}님!</p>
        <div className="bg-orange-50 rounded-xl px-6 py-4 text-left space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold text-orange-600">아이디 : </span>
            {username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
