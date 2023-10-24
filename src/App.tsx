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

  type StartEnd = {
    start: [number, number];
    end: [number, number];
  };

  type Wpuzzle = Record<string, StartEnd | undefined>;

  const dx: number[] = [1, 1, 0, -1, -1, -1, 0, 1];
  const dy: number[] = [0, -1, -1, -1, 0, 1, 1, 1];
  class WordSearch {
    private pattern: string[] = [];
    constructor(input: string[]) {
      this.pattern = input;
    }

    public isOut(x: number, y: number): boolean {
      if (x < 0 || x >= this.pattern[0].length) return true;
      if (y < 0 || y >= this.pattern.length) return true;
      return false;
    }

    public find(words: string[]): Wpuzzle {
      const rlt: Wpuzzle = {};
      for (let word of words) {
        rlt[word] = undefined;
        for (let i = 0; i < this.pattern[0].length; i++) {
          for (let j = 0; j < this.pattern.length; j++) {
            for (let d = 0; d < 8; d++) {
              let temp = "",
                xx = i,
                yy = j;
              for (let k = 0; k < word.length; k++) {
                temp += this.pattern[xx][yy];
                xx += dx[d];
                yy += dy[d];
                if (this.isOut(xx, yy)) break;
              }
              if (word === temp) {
                rlt[word] = {
                  start: [i + 1, j + 1],
                  end: [
                    i + dx[d] * (word.length - 1) + 1,
                    j + dy[d] * (word.length - 1) + 1,
                  ],
                };
                break;
              }
            }
          }
        }
      }
      return rlt;
    }
  }

  const grid = ["jefblpepre"];
  const wordSearch = new WordSearch(grid);
  console.log(wordSearch instanceof WordSearch);

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
