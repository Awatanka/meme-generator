import { useState } from "react";
import ImageIcon from "../assets/image-icon.png";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <>
      <main>
        <div className="form">
          <input
            placeholder="Enter top text"
            type="text"
            className="form--input"
          />
          <input
            placeholder="Enter bottom text"
            type="text"
            className="form--input"
          />
          <button onClick={getMemeImage} className="form--button">
            Get a new meme image{" "}
            <img src={ImageIcon} className="button--image"></img>
          </button>
          <img src={memeImage}></img>
        </div>
      </main>
    </>
  );
}
