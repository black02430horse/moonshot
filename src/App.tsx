import React from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";
import { BlogList, PATH } from "./consts";
import { Provider, useSelector } from "react-redux";
import { store, RootState, AppActions } from "./redux/store";
import { boolean } from "yargs";
import { SnackbarProvider } from "notistack";

function App() {
  // console.log(JSON.stringify(BlogList[1].buttons));

  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
      <SnackbarProvider maxSnack={4}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path={PATH.Login} element={<LoginPage />} />
            <Route path={PATH.SignUp} element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
