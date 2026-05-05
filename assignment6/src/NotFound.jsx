// "페이지를 찾을 수 없습니다" 안내
// 뒤로가기 설정추가
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};
