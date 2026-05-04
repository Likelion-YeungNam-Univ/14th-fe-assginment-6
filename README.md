# 14th-fe-assignment-6

## 1. 기본 라우팅 구현

- (홈 화면): userId의 유무에 따라 화면이 다르게 렌더링됩니다.

- 로그인 전: "서비스를 이용하실려면 로그인해주세요" 문구와 [로그인 하러가기] 버튼 노출

<br>

<img src="./Interfacescreenshot/스크린샷 2026-05-05 054003.png" >


<br>

---

<br>

- 로그인 후: {userId}님 환영합니다~~ 문구 노출

<br>

<img src="./Interfacescreenshot/스크린샷 2026-05-05 054629.png" >

<br>

---

<br>

- /login (로그인 화면): Layout 컴포넌트 외부에 배치되어 상단 Navbar 없이 화면 전체를 사용하도록 구현되었습니다.

<br> 

<img src="./Interfacescreenshot/스크린샷 2026-05-05 054015.png" >

<br>

---

<br>

- /mypage (마이페이지): Layout 내부에 배치되어 상단바를 유지하며, 로그인한 사용자의 아이디({userId})를 띄워주는 개인 페이지로 구현되었습니다.

<br>

<img src="./Interfacescreenshot/스크린샷 2026-05-05 054102.png" >


<br>

---

<br>

* (404 예외 처리): 사용자가 잘못된 URL로 접근했을 때 화면에 띄울 NotFound 페이지를 라우터 최하단에 구현했습니다.

<br>

<img src="./Interfacescreenshot/스크린샷 2026-05-05 054213.png" >

<br>

---

<br>

## 2. 로그인 흐름

- 상태 업데이트: 로그인 폼에서 입력받은 값을 App에서 내려받은 setUserId, setPassword 함수를 통해 전역 상태로 저장합니다.

- 피드백 제공: 로그인이 완료되면 alert(userId + '님 로그인이 완료되었습니다.')를 통해 즉각적인 피드백을 줍니다.

- 페이지 이동: setTimeout을 활용해 2초 대기 후 navigate('/', { replace: true })를 실행합니다.

- 히스토리 관리: replace: true 옵션을 통해 브라우저 기록을 덮어씌워, 사용자가 뒤로 가기를 눌러도 다시 로그인 폼으로 돌아가지 않도록 완벽하게 처리했습니다.

## 3. 로그아웃 기능

- 상태 초기화: Navbar의 [로그아웃] 버튼에 onClick={() => { setUserId(null); setPassword(null); }} 이벤트를 직접 연결했습니다.

- 동적 UI 변경: 전역 상태인 userId가 null로 변함에 따라, Navbar 컴포넌트가 즉시 리렌더링되어 [마이페이지]와 [로그아웃] 버튼이 화면에서 즉각적으로 사라집니다.

##  4. 404 페이지 구현 (NotFound)

- 직관적인 UI: 에머랄드 색상을 활용하여 "404 페이지를 찾을 수 없습니다"라는 직관적인 안내 화면을 구성했습니다.

- 이전 페이지 복귀: useNavigate 훅을 활용하여, 버튼 클릭 시 navigate(-1) 로직이 실행되도록 설계했습니다. 이를 통해 사용자가 잘못된 경로로 들어왔더라도 직전 페이지로 안전하게 돌아갈 수 있습니다.

## 5. 컴포넌트 및 상태 관리 (추가 사항)

- 상태 끌어올리기 (State Lifting): 모든 핵심 데이터(userId, password)를 최상위 부모인 App.jsx에서 관리하고, 각 자식 컴포넌트(Home, Login, MyPage, Layout)에 Props로 깔끔하게 내려주는 정석적인 패턴을 적용했습니다.

- Layout 기반 렌더링: Layout 컴포넌트가 Navbar를 고정으로 렌더링하고, Outlet을 통해 하위 주소(/, /mypage)에 맞는 컴포넌트만 교체해 주는 효율적인 구조를 완성했습니다.


