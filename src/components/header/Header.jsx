import React, { useState, useEffect } from "react";

import LogoImg from "../../assets/imgs/logo.png";
import PlachoderImg from "../../assets/imgs/placehoder.png";
import HambugerIcon from "../../assets/svgs/hambuger.svg";

import "./header.scss";
const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	const [open, setOpen] = useState(false);

	const handlerOpenNavMenu = () => {
		setOpen(!open);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`hero-header ${scrolled ? "scrolled" : ""}`}>
			<div className="hero-header-wrapper">
				<a href="/" className="hero-logo">
					<img src={LogoImg} alt="logo" />
				</a>
				<div className="hero-nav-icon" onClick={handlerOpenNavMenu}>
					<img src={HambugerIcon} alt="" />
				</div>
				<nav className={`hero-nav-menu ${open ? "active-menu" : ""} `}>
					<a href="#about-bromo">Tentang Bromo</a>
					<a href="#tourist-activity">Aktifitas Wisata</a>
					<a href="#hiking-trails">Rute Pendakian</a>
					<a href="#safety-tips">Tips Keamanan</a>
					<a href="#about-bromo">
						<img src={PlachoderImg} alt="" />
						JATIM, Indonesia
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
