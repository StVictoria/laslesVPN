import { useState } from "preact/hooks";
import clsx from "clsx";
import Button from "../common/Button";
import "./Menu.scss";
import CloseIcon from "../../assets/icons/close.png";

export const navSections = [
  { id: 1, name: "About" },
  { id: 2, name: "Features" },
  { id: 3, name: "Pricing" },
  { id: 4, name: "Testimonials" },
  { id: 5, name: "Help" },
];

const Menu = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const renderNavSections = () => navSections.map(section => <li className="Menu-Item" key={section.id}><a href="#"><b>{section.name}</b></a></li>);

  const handleOpenMenu = () => setMenuOpened(!isMenuOpened);

  return (
    <div className="Menu">
      <div className="Menu-Button">
        <Button isOutlined text="Menu" onClick={handleOpenMenu} />
      </div>
      <nav className={clsx("Menu-Nav", { "Menu-Nav_opened": isMenuOpened })}>
        <ul className="Menu-List">
          {renderNavSections()}
        </ul>
        <div className="Menu-Sign">
          <Button isOutlined text="Sign up" />
          <button className="Menu-SignIn"><b>Sign in</b></button>
        </div>
        <button className="Menu-CloseButton" onClick={handleOpenMenu}><img src={CloseIcon} className="Menu-CloseIcon" alt="close" /></button>
      </nav>
    </div>
  );
};

export default Menu;