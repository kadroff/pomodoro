import React, { useState } from "react";
import "./App.css";
import { CodeTimer } from "./components/CodeTimer.jsx";
import { SocialTimer } from "./components/SocialTimer.jsx";

function App() {
  const [code, setCode] = useState(true);

  const changeButton = props => {
    if (props === "code") {
      setCode(true);
    } else {
      setCode(false);
    }
  };

  return (
    <div className="App">
      <a className="github_logo" href="https://github.com/kadroff/">
        <img src={require("./github.png")} alt="Github" />
      </a>
      <button onClick={() => changeButton("code")}>Code</button>
      <button onClick={() => changeButton("social")}>Social</button>
      {code ? <CodeTimer /> : <SocialTimer />}
    </div>
  );
}

export default App;
