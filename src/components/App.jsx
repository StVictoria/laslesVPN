import { h } from 'preact';
import Header from './header/Header';
import "./App.scss";
import StartSection from "./startSection/StartSection";

const App = () => (
	<div id="App" className="App">
		<Header />
		<StartSection />
	</div>
)

export default App;
