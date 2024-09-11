// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// src/index.js

import React from "react"; // 중복된 선언이 있으면 제거합니다.
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./App1"; // 새로 만든 App1 컴포넌트 사용

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);
