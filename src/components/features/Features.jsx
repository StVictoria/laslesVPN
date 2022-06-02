import "./Features.scss";
import FeaturesImage from "../../assets/images/image_2.svg";
import CheckIcon from "../../assets/icons/check-filled.svg";

const features = [
  {id: 1, title: "Powerfull online protection."},
  {id: 2, title: "Internet without borders."},
  {id: 3, title: "Supercharged VPN."},
  {id: 4, title: "No specific time limits."},
];

const Features = () => {
  const renderFeatures = () => features.map(feature => (
    <li className="Features-Item" key={feature.id}>
      <CheckIcon width={20} />
      <p className="Features-ItemTitle">{feature.title}</p>
    </li>
  ))
  
  return (
  <section className="Features">
    <div className="Features-Image">
      <FeaturesImage />
    </div>
    <section className="Features-Info">
      <h2>We Provide Many Features You Can Use</h2>
      <p className="Features-Description">You can explore the features that we provide with fun and have their own functions each feature.</p>
      <ul>{renderFeatures()}</ul>
    </section>
  </section>
  )
}
  


export default Features;