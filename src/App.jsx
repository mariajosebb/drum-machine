import React, { useState, useEffect } from "react";
import "./App.css";
import Toggle from "./components/Toggle";

const keyToAudioMap = [
  { key: "Q", path: "/Heater-1.mp3", sound: "Heater-1" },
  { key: "W", path: "/Heater-2.mp3", sound: "Heater-2" },
  { key: "E", path: "/Heater-3.mp3", sound: "Heater-3" },
  { key: "A", path: "/Heater-4_1.mp3", sound: "Heater-4_1" },
  { key: "S", path: "/Heater-6.mp3", sound: "Heater-6" },
  { key: "D", path: "/Dsc_Oh.mp3", sound: "Dsc_Oh" },
  { key: "Z", path: "/Kick_n_Hat.mp3", sound: "Kick_n_Hat" },
  { key: "X", path: "/RP4_KICK_1.mp3", sound: "RP4_KICK_1" },
  { key: "C", path: "/Cev_H2.mp3", sound: "Cev_H2" },
];

function App() {
  const [isToggled, setToggled] = useState(true);
  const [displayText, setDisplayText] = useState("PRESS A KEY");

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const playAudio = (keyToAudio) => {
    if (!isToggled) return;
    const audioElement = document.getElementById(keyToAudio.key);
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      setDisplayText(keyToAudio.sound);
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const foundedKey = keyToAudioMap.find((e) => e.key === key);
    if (foundedKey) {
      playAudio(foundedKey);
    }
  };

  useEffect(() => {
    if (!isToggled) setDisplayText("----------");
    else setDisplayText("PRESS A KEY");
  }, [isToggled]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="drum-pads">
        {keyToAudioMap.map((keyToAudio) => (
          <button
            id={keyToAudio.path}
            key={keyToAudio.key}
            className={`drum-pad ${isToggled ? "" : "disabled"}`}
            onClick={() => playAudio(keyToAudio)}
            disabled={!isToggled}
          >
            {keyToAudio.key}
            <audio
              id={keyToAudio.key}
              src={keyToAudio.path}
              className="clip"
              preload="auto"
              autoPlay={false}
            />
          </button>
        ))}
      </div>
      <div id="controls-container">
        <div id="power">
          <p>POWER</p>
          <Toggle isToggled={isToggled} handleToggle={handleToggle} />
        </div>
        <div id="display">{displayText}</div>
      </div>
    </div>
  );
}

export default App;
