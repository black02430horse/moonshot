import React from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";
import { PATH } from "./consts";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "./redux/store";
import { boolean } from "yargs";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
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
