// Project files
import profilePicture from "../assets/images/profile-pic.jpg";

export default function Intro() {
  return (
    <section className="Intro">
      <img src={profilePicture} alt="En-Chi headshot" className="profile-pic" />
      <div>
        <h1>
          Hi, I'm <span className="name">En-Chi</span>
        </h1>
        <p>
          Hej Hej! I'm a Taiwanese-Brit now based in Sweden and training as a
          software developer thanks to KTH and Novare Potential. I previously
          worked with digital communications and direct marketing at a top
          global university in Scotland. My past colleagues would tell you that
          I'm a positive team player with a passion for lifelong learning.
        </p>
      </div>
    </section>
  );
}
