import "./Footer.scss";
import Logo from "../../assets/icons/LaslesVPNLogo.svg";
import FacebookIcon from "../../assets/icons/facebook.png";
import TwitterIcon from "../../assets/icons/twitter.png";
import InstagramIcon from "../../assets/icons/instagram.png";

const buttons = [
  { id: 1, src: FacebookIcon },
  { id: 2, src: TwitterIcon },
  { id: 3, src: InstagramIcon },
];

const Footer = () => {
  const renderContactButtons = () => buttons.map(button => (
    <li key={button.id}>
      <button className="Footer-ContactButton">
        <img src={button.src} className="Footer-ContactImg" />
        </button>
    </li>
  ))
  
  return (
    <footer className="Footer">
      <section>
        <Logo width={140} height={40} />
        <p className="Footer-LaslesDescr"><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
        <ul className="Footer-ContactButtons">
          {renderContactButtons()}
        </ul>
        <p className="Footer-Copyrights">
          ©2020LaslesVPN
        </p>
      </section>
      <section>
        Other Info
      </section>
    </footer>
  );
};

export default Footer;