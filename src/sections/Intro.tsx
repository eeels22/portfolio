// Project files
import profilePicture from "../assets/images/profile-pic.jpg";

export default function Intro() {
  return (
    <section className="Intro">
      <h1>Hi, I'm En-Chi</h1>
      <img src={profilePicture} alt="En-Chi headshot" className="profile-pic" />
      <p>
        Hej Hej! I'm a Taiwanese-Brit now based in Sweden and training as a
        software developer thanks to KTH and Novare Potential. I previously
        worked with digital communications and direct marketing at a top global
        university in Scotland. My past colleagues would tell you that I'm a
        positive team player with a passion for lifelong learning.
      </p>
    </section>
  );
}
