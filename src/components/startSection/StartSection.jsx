import StartSectionImg from "../../assets/images/image_1.svg";
import Button from "../common/Button";
import "./StartSection.scss";

const StartSection = () => (
  <section className="StartSection">
    <section className="StartSection-Info">
      <h1 className="StartSection-Title">Want anything to be easy with <b>LaslesVPN.</b></h1>
      <p className="StartSection-Descr Description">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
      <Button text="Get Started" />
    </section>
    <div className="StartSection-Img">
      <StartSectionImg />
    </div>
  </section>
);

export default StartSection;