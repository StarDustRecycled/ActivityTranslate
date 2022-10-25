import { useState } from "react";
import "./styles.css";
const emojiLib = require("emojilib");
const emojiLibDict = Object.keys(emojiLib);
/***Setting Up a few Variables that we will be using****/
export default function App() {
  const [input, setInputEvent] = useState("Lets try something!");
  function emojiClickHandler(emoji) {
    let currEmoji = emojiLib[emoji][0].replaceAll("_", " ");
    setInputEvent(currEmoji);
  }
  let inputHandler = (event) => {
    let inputValue = event.target.value;
    if (inputValue === "") {
      setInputEvent("Try an emoji here!");
    } else if (emojiLib[inputValue][0] === undefined) {
      setInputEvent("Oops! No matches");
    } else {
      setInputEvent(emojiLib[inputValue][0].replaceAll("_", " "));
    }
  };
  return (
    <div className="App">
      <h1>
        <span
          style={{
            color: "purple",
            fontFamily: "monospace",
            fontSize: "40px",
            cursor: "grab"
          }}
        >
          Activity-translate
        </span>
      </h1>
      <input onChange={inputHandler}></input>
      <h3>{input}</h3>
      {emojiLibDict
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
        .map((emoji) => {
          return (
            <span
              onClick={() => {
                emojiClickHandler(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
    </div>
  );
}
