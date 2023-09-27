import { useEffect, useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { EventsOn } from "@wails/runtime/runtime";
import { ChannelsShowAbout, Greet } from "@wails/go/main/App";
import AboutPage from "@pages/AboutPage";

function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const [aboutShow, setAboutShow] = useState<boolean>(false);

  useEffect(() => {
    ChannelsShowAbout().then((showAbout) => {
      EventsOn(showAbout, () => {
        setAboutShow(true);
      });
    });
  });

  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  return (
    <div id="App">
      <img src={logo} id="logo" alt="logo" />
      <div id="result" className="result">
        {resultText}
      </div>
      <div id="input" className="input-box">
        <input
          id="name"
          className="input"
          onChange={updateName}
          autoComplete="off"
          name="input"
          type="text"
        />
        <button className="btn" onClick={greet}>
          Greet
        </button>
      </div>

      <AboutPage show={aboutShow} onClose={() => setAboutShow(false)} />
    </div>
  );
}

export default App;
