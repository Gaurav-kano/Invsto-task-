import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./Components/Home";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Home theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
