// import React from "react";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";

function App() {
  /**
   * 모드 변경 논리
   * 1. ThemeButton에 온클릭 이벤트를 만든다.
   * 2. 버튼이 눌러졌다는 이벤트를 부모 컴포넌트에 전송한다. (onTheme)
   * 3. 부모 컴포넌트가 이벤트를 받으면 div 클래스를 변환하는 함수를 생성한다. (handleTheme)
   * 4. [state] isDarkMode라는 state를 생성한다.
   * 4-1. isDarkMode의 초기값은 false로 한다.
   * 5. isDarkMode state에 따라 wrap 클래스가 있는 div에 className의 속성을 다르게 넣어준다.
   * 5-1. 다크모드인 경우엔 'dark-mode'라는 클래스를 준다.
   * 5-2. 다크모드가 아닌 경우엔 'light-mode'라는 클래스를 준다.
   * 6. handleTheme 함수에서 isDarkMode의 값을 토글로 변경해준다.
   *
   * 7. ThemeButton 컴포넌트에 isDarkMode라는 prop을 내려준다.
   * 7-1. 이 prop에는 isDarkMode의 값을 넣어준다.
   * 8. ThemeButton 컴포넌트에 isDarkMode의 값을 받아서 true인 경우엔 '다크 모드' false인 경우엔 '라이트 모드'라는 텍스트를 UI에 보여준다.
   *
   * 9. 버튼을 클릭한다.
   * 10. 작동이 잘 되는지 바뀌는 걸 확인한다.
   */

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`wrap ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      ...
      <ThemeButton onTheme={handleTheme} isDarkMode={isDarkMode} />
      {/* <Test /> */}
    </div>
  );
}

export default App;
