import React from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";
import { PATH } from "./consts";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path={PATH.Login} element={<LoginPage />} />
            <Route path={PATH.SignUp} element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
