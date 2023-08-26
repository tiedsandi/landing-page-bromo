import React, { useState } from "react";

import BackgroundVideo from "../../assets/videos/hero-video.mp4";
import "./hero.scss";
import Rating from "../rating/Rating";
import Header from "../header/Header";

const Hero = () => {
	return (
		<div className="hero-container">
			<video autoPlay loop muted className="hero-video">
				<source src={BackgroundVideo} type="video/mp4" />
			</video>
			<Header />
			<div className="hero-content">
				<div className="hero-text-wrapper">
					<div className="hero-text">
						<div className="hero-text-heading">GN. BROMO</div>
						<div className="hero-text-sub-heading">
							Matahari Terbit di Atas Keindahan Vulkanik
						</div>
					</div>
					<div className="hero-text-rating">
						4,7
						<Rating value={4.7} />
						10.800 ulasan Google
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
