function MyPage({ isLogin }) {
  if (!isLogin) {
    return <h1 className="text-center mt-10">로그인이 필요합니다</h1>;
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">마이페이지</h2>
        <p>이름: ooo </p>
        <p>이메일: meossdae@naver.com</p>
      </div>
    </div>
  );
}

export default MyPage;