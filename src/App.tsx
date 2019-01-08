import * as React from "react";
import { ThemeProvider } from "react-jss";
import "./App.css";
import Sample from "./components/Sample/Sample";

const logo = require("./logo.svg"); //TODO: Allow importing instead of require
const theme = {}; // TODO: Define Theme and pass here

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            onClick={() => {
              window.open("https://www.github.com", "_blank");
            }}
            className="App-logo"
            alt="logo"
          />
          <h2>Welcome to CRA-TS</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
      <div>
        <ThemeProvider theme={theme}>
          <Sample />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
