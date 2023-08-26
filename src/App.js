import "./App.scss";
import AboutBromo from "./components/about-bromo/AboutBromo";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import HikingTrails from "./components/hiking-trails/HikingTrails";
import SafetyTips from "./components/safety-tips/SafetyTips";
import TouristActivit from "./components/tourist-activity/TouristActivit";

const App = () => {
	return (
		<div id="leading-page">
			<Hero />
			<AboutBromo />
			<TouristActivit />
			<HikingTrails />
			<SafetyTips />
			<Footer />
		</div>
	);
};

export default App;
