import React, { useState, useEffect } from "react";
import { Howl } from "howler";

function App() {
  // Definir un objeto que mapea las teclas a los archivos de audio
  const keyToAudioMap = {
    Q: "/Heater-1.mp3",
    W: "/Heater-2.mp3",
    E: "/Heater-3.mp3",
    A: "/Heater-4_1.mp3",
    S: "/Heater-6.mp3",
    D: "/Dsc_Oh.mp3",
    Z: "/Kick_n_Hat.mp3",
    X: "/RP4_KICK_1.mp3",
    C: "/Cev_H2.mp3",
  };

  // Estado local para el audio actual
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = (audioSrc) => {
    if (currentAudio) {
      currentAudio.stop();
    }

    const audio = new Howl({ src: [audioSrc] });
    audio.play();
    setCurrentAudio(audio);
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    if (keyToAudioMap[key]) {
      playAudio(keyToAudioMap[key]);
    }
  };

  useEffect(() => {
    // Agregar un controlador de eventos para las teclas
    document.addEventListener("keydown", handleKeyPress);

    // Limpiar el controlador de eventos al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => playAudio(keyToAudioMap["Q"])}>Q</button>
        <button onClick={() => playAudio(keyToAudioMap["W"])}>W</button>
        <button onClick={() => playAudio(keyToAudioMap["E"])}>E</button>
      </div>
      <div>
        <button onClick={() => playAudio(keyToAudioMap["A"])}>A</button>
        <button onClick={() => playAudio(keyToAudioMap["S"])}>S</button>
        <button onClick={() => playAudio(keyToAudioMap["D"])}>D</button>
      </div>
      <div>
        <button onClick={() => playAudio(keyToAudioMap["Z"])}>Z</button>
        <button onClick={() => playAudio(keyToAudioMap["X"])}>X</button>
        <button onClick={() => playAudio(keyToAudioMap["C"])}>C</button>
      </div>
    </div>
  );
}

export default App;
