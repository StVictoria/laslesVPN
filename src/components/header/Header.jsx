import { h } from 'preact';
import Logo from "../../assets/icons/LaslesVPNLogo.svg";
import Button from '../common/Button';
import "./Header.scss";
import Menu, { navSections } from './Menu';

const Header = () => {
	const renderNavSections = () => navSections.map(section => <a key={section.id} href="#" className="Header-NavLink">{section.name}</a>)
	console.log(renderNavSections)
	
	return <header className="Header">
		<div className="Header-Logo">
			<Logo />
		</div>
		<nav className="Header-Nav">
			{renderNavSections()}
		</nav>
		<Menu />
		<div className="Header-Sign">
			<button className="Header-SignIn"><b>Sign in</b></button>
			<Button isOutlined text="Sign up" />
		</div>
	</header>
}

export default Header;
