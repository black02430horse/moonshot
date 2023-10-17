import React from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
