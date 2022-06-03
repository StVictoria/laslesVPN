import MapImg from "../../assets/images/map.png";
import "./MapSection.scss";

const MapSection = () => (
  <section className="MapSection">
    <h2 className="MapSection-Title">Huge Global Network of Fast VPN</h2>
    <p className="MapSection-Description">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
    <img src={MapImg} className="MapSection-MapImg" alt="Gloval Network VPN Map" />
  </section>
);

export default MapSection;