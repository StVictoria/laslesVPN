import { h } from 'preact';
import Logo from "../../assets/icons/LaslesVPNLogo.svg";
import Button from '../common/Button';
import "./Header.scss";

const navSections = [
	{ id: 1, name: "About" },
	{ id: 2, name: "Features" },
	{ id: 3, name: "Pricing" },
	{ id: 4, name: "Testimonials" },
	{ id: 5, name: "Help" },
];

const Header = () => {
	const renderNavSections = () => navSections.map(section => <button key={section.id} className="Header-NavButton">{section.name}</button>)
	
	return <header className="Header">
		<div className="Header-Logo">
			<Logo />
		</div>
		<nav className="Header-Nav">
			{renderNavSections()}
		</nav>
		<div className="Header-Sign">
			<button className="Header-SignIn"><b>Sign in</b></button>
			<Button isOutlined text="Sign up" />
		</div>
	</header>
}

export default Header;
