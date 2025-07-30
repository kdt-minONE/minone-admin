import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { checkAuthStatus } from "./utils/auth";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AdminHome } from "./pages/AdminHome";

function App() {
  // 앱 시작 시 인증 상태 확인
  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
