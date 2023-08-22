import "./App.scss";
import AboutBromo from "./components/about-bromo/AboutBromo";
import Hero from "./components/hero/Hero";
import TouristActivit from "./components/tourist-activity/TouristActivit";

const App = () => {
	return (
		<div id="leading-page">
			<Hero />
			<AboutBromo />
			<TouristActivit />
			<div id="route"></div>
			<div id="safety-tips"></div>
			<div id="footer"></div>
		</div>
	);
};

export default App;
