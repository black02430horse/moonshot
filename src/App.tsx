import React from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";
import { PATH } from "./consts";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path={PATH.Login} element={<LoginPage />} />
          <Route path={PATH.SignUp} element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
