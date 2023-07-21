import ImageIcon from "../assets/image-icon.png";
import memesData from "../memesData";

export default function Meme() {
  let url;

  function handleClick() {
    const memesArray = memesData.data.memes;
    const rendomMeme = memesArray[Math.floor(Math.random() * memesArray)];
    url = rendomMeme.url;
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
          <button onClick={handleClick} className="form--button">
            Get a new meme image{" "}
            <img src={ImageIcon} className="button--image"></img>
          </button>
          <img src=""></img>
        </div>
      </main>
    </>
  );
}
