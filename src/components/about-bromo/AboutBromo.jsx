import React from "react";

import AboutImg from "../../assets/imgs/about-section.png";
import "./about-bromo.scss";
import Heading from "../heading/Heading";

const AboutBromo = () => {
	return (
		<div id="about-bromo">
			<Heading
				mainHeading={"Tentang Bromo"}
				subHeading={"Penjelasan singkat tentang Gunung Bromo"}
			/>
			<div className="about-content">
				<div className="about-image">
					<img src={AboutImg} alt="about" />
				</div>
				<p className="about-text">
					<b>Gunung Bromo </b>adalah salah satu gunung berapi paling terkenal di
					Indonesia, terletak di Taman Nasional Bromo Tengger Semeru, Jawa
					Timur. Gunung ini menarik minat ribuan wisatawan setiap tahunnya
					karena pemandangannya yang menakjubkan dan keunikannya. Bromo memiliki
					ketinggian sekitar 2.329 meter di atas permukaan laut dan terkenal
					dengan kawahnya yang aktif serta panorama alam yang luar biasa.
				</p>
				<p className="about-text">
					Lokasi:
					<br />
					<b>Gunung Bromo</b> terletak di Jawa Timur, Indonesia. Kawah Bromo
					berada di dalam kaldera Tengger, sebuah cekungan besar yang
					dikelilingi oleh pegunungan yang menjulang tinggi. Kawah ini merupakan
					salah satu dari beberapa kawah di kaldera yang lebih besar,
					menciptakan lanskap yang sangat indah dan dramatis.
				</p>
			</div>
		</div>
	);
};

export default AboutBromo;
