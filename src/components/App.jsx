import { h } from 'preact';
import Header from './header/Header';
import "./App.scss";
import StartSection from "./startSection/StartSection";
import CommonInfo from './commonInfo/CommonInfo';
import Features from './features/Features';
import Plans from './plans/Plans';
import MapSection from './mapSection/MapSection';
import Companies from './companies/Companies';
import Testimonials from './testimonials/Testimonials';

const App = () => (
	<div id="App" className="App">
		<Header />
		<StartSection />
		<CommonInfo />
		<Features />
		<Plans />
		<MapSection />
		<Companies />
		<Testimonials />
	</div>
)

export default App;
