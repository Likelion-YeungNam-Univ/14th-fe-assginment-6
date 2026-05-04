const MyPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">마이페이지</h1>
      <p>아이디: {user?.username}</p>
    </div>
  );
};

export default MyPage;