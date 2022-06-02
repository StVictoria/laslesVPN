import "./CommonInfo.scss";
import UserIcon from "../../assets/icons/user.svg";
import LocationIcon from "../../assets/icons/location.svg";
import ServerIcon from "../../assets/icons/server.svg";

const info = [
  {id: 1, amount: 90, title: "Users"},
  {id: 2, amount: 30, title: "Locations"},
  {id: 3, amount: 50, title: "Servers"},
];

const CommonInfo = () => {
  const renderInfo = () => info.map(item => (
    <div className="CommonInfo-Info" key={item.id}>
      <div className="CommonInfo-Icon">
        {item.title === "Users" && <UserIcon />}
        {item.title === "Locations" && <LocationIcon />}
        {item.title === "Servers" && <ServerIcon />}
      </div>
      <div className="CommonInfo-RestInfo">
        <p className="CommonInfo-Amount"><b>{item.amount}+</b></p>
        <p className="CommonInfo-Title">{item.title}</p>
      </div>
    </div>
  ));
  
  return (
    <section className="CommonInfo">
    {renderInfo()}
  </section>
  )
}

export default CommonInfo;