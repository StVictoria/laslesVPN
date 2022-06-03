import "./Plans.scss";
import BoxImg from "../../assets/images/box.png";
import CheckIcon from "../../assets/icons/check.svg";
import Button from "../common/Button";

const plans = [
  {  id: 1, title: "Free Plan", price: "Free", benefits: ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"]},
  {  id: 2, title: "Standard Plan", price: "9", benefits: ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices", "Connect Anyware"]},
  {  id: 3, title: "Premium Plan", price: "12", benefits: ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices", "Connect Anyware", "Get New Features"]},
];

const Plans = () => {
  const renderBenefits = (benefits) => benefits.map(benefit => (
    <li className="Plans-Benefit" key={benefit}>
       <CheckIcon width={20} />
        <p className="Plans-BenefitDescr">{benefit}</p>
    </li>
  ));
  
  const renderPlans = () => plans.map(plan => (
    <li className="Plans-Option" key={plan.id}>
      <div className="Plans-OptionBody">
        <img src={BoxImg} className="Plans-BoxImg" alt="Box Plan" />
        <h3 className="Plans-OptionTitle">{plan.title}</h3>
        <ul className="Plans-Benefits">
         {renderBenefits(plan.benefits)}
        </ul>
      </div>
      <div className="Plans-Footer">
        <div className="Plans-Price">{plan.title === "Free Plan" ? <b>Free</b> : (
          <>
            <b>${plan.price}</b>
            <p>/mo</p>
          </>
        )}
        </div>
        <Button isOutlined text="Select" />
      </div>
    </li>
  ));
  
  return (
    <section className="Plans">
      <h2 className="Plans-Title">Choose Your Plan</h2>
      <p className="Plans-Description">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      <ul className="Plans-Options">
        {renderPlans()}
      </ul>
    </section>
  )
}

export default Plans;