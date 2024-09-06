import { useReducer } from "react";

function App() {
  // logic
  console.log("App.js");

  const name = "olivia";
  const age = 27;

  // 안녕하세요. olivia님! 나이게 27세 이시네요.
  // 환영합니다.

  const greetingMessage = `안녕하세요. ${name}님! 나이가 ${age}세 이시네요. \n환영합니다`;
  console.log(greetingMessage);

  const user = {
    isLoggedIn: true,
    role: "admin", //'guest' , 'user'
  };

  /**
   * Logical operators
   * 단축 평가 논리 계산법 */

  // 사용자가 로그인 한 상태이면서, 역할이 'admin'인 경우에 "관리자 페이지 접근 가능" 아니면 "관리자 페이지 접근 불가능"
  // 로그인 한 상태이면서, 동시에 admin권한을 가진 유저
  if (!user.isLoggedIn || user.role !== "admin") {
    console.log("관리자 페이지에 접근이 가능합니다.");
  } else {
    console.log("관리자 페이지에 접근이 불가능합니다!!");
  }

  const user2 = {
    id: "olivia",
    password: "password",
    isLoggedIn: false,
  };

  if (user2.id === "olivia" && user2.password === "password") {
    // 1차 조건 판별
    user2.isLoggedIn = ture;
    if (userInput) {
      //사용자 입력값이 있는 경우
    }
  }

  // view
  return <div>hello world</div>;
}

export default App;
