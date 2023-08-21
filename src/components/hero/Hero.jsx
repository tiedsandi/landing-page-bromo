import React, { useState } from "react";

import BackgroundVideo from "../../assets/videos/hero-video.mp4";
import LogoImg from "../../assets/imgs/logo.png";
import PlachoderImg from "../../assets/imgs/placehoder.png";
import HambugerIcon from "../../assets/svgs/hambuger.svg";
import "./hero.scss";

const Hero = () => {
	const [open, setOpen] = useState(false);

	const handlerOpenNavMenu = () => {
		setOpen(!open);
	};
	return (
		<div className="hero-container">
			<video autoPlay loop muted className="hero-video">
				<source src={BackgroundVideo} type="video/mp4" />
			</video>
			<div className="hero-content">
				<header className="hero-header">
					<a href="/" className="hero-logo">
						<img src={LogoImg} alt="logo" />
					</a>
					<div className="hero-nav-icon" onClick={handlerOpenNavMenu}>
						<img src={HambugerIcon} alt="" />
					</div>
					<nav className={`hero-nav-menu ${open ? "active-menu" : ""} `}>
						<a href="#about-bromo">Tentang Bromo</a>
						<a href="#tourist-activity">Aktifitas Wisata</a>
						<a href="#route">Rute Pendakian</a>
						<a href="#safety-tips">Tips Keamanan</a>
						<a href="#about-bromo">
							<img src={PlachoderImg} alt="" />
							JATIM, Indonesia
						</a>
					</nav>
				</header>
				<div className="hero-text-wrapper">
					<div className="hero-text">
						<div className="hero-text-heading">GN. BROMO</div>
						<div className="hero-text-sub-heading">
							Matahari Terbit di Atas Keindahan Vulkanik
						</div>
					</div>
					<div className="hero-text-rating">
						4,7
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 19"
							fill="none"
						>
							<path
								d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
								fill="#F8DF00"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 19"
							fill="none"
						>
							<path
								d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
								fill="#F8DF00"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 19"
							fill="none"
						>
							<path
								d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
								fill="#F8DF00"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 19"
							fill="none"
						>
							<path
								d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
								fill="#F8DF00"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 19"
							fill="none"
						>
							<path
								d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
								fill="#ffffff"
							/>
						</svg>
						10.800 ulasan Google
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
