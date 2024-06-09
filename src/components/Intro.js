import "./Intro.css";
import introImg from "../images/intro.png";

function Intro() {
  return (
    <>
      <div className="intro">
        <div>
          <img src={introImg} alt="" />
        </div>

        <div className="div1">
          <p className="p1">Get personalised home interiors</p>
          <h1 className="p2">in just 50 days</h1>
          <button>SPEAK WITH A ONLINE CONSULTANT</button>
        </div>
      </div>
    </>
  );
}

export default Intro;