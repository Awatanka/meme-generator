import Meme from "../assets/meme.png";

export default function Header() {
  return (
    <>
      <header>
        <img src={Meme} className="header--image" />
        <h2 className="header--title"> Meme Generator</h2>
        <h5 className="header--project">Create and Share Laughter!</h5>
      </header>
    </>
  );
}
