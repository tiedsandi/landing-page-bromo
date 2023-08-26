import React from "react";

import ImgLogo from "../../assets/imgs/logo-b.png";
import ImgBackground from "../../assets/imgs/sumeru.png";
import "./footer.scss";
import Rating from "../rating/Rating";
const Footer = () => {
	return (
		<div id="footer">
			<div className="footer-wrapper">
				<div className="footer-logo">
					<img src={ImgLogo} alt="logo" />
				</div>
				<div className="footer-content">
					<div className="footer-about">
						<h3>Tentang Website</h3>
						<p>
							Leading page untuk memperkenalkan wisata Gn. Bromo, yang terletak
							di Tenggareng Jawa Timur.
						</p>
					</div>
					<div className="footer-links">
						<h3>Links</h3>
						<ul>
							<li>
								<a href="#Hero">
									<p>Home</p>
								</a>
							</li>
							<li>
								<a href="#about-bromo">
									<p>Tentang</p>
								</a>
							</li>
							<li>
								<a href="#tourist-activity">
									<p>Aktifitas</p>
								</a>
							</li>
							<li>
								<a href="#hiking-trails">
									<p>Rute</p>
								</a>
							</li>
							<li>
								<a href="#safety-tips">
									<p>Tips Keamanan</p>
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-recomendation">
						<h3>Destinasi Lainnya</h3>
						<div className="recomendation-wrapper">
							<div className="recomendation-item">
								<div className="overlay"></div>
								<img
									src={ImgBackground}
									alt="recomandation-1"
									className="recomedation-img"
								/>
								<div className="recomendation-text">
									<h6>Gn. Sumeru</h6>
									<p>
										3
										<Rating value={3} />
										10.213 ulasan Google
									</p>
								</div>
							</div>
							<div className="recomendation-item">
								<div className="overlay"></div>
								<img
									src={ImgBackground}
									alt="recomandation-1"
									className="recomedation-img"
								/>
								<div className="recomendation-text">
									<h6>Gn. Sumeru</h6>
									<p>
										3
										<Rating value={3} />
										10.213 ulasan Google
									</p>
								</div>
							</div>
							<div className="recomendation-item">
								<div className="overlay"></div>
								<img
									src={ImgBackground}
									alt="recomandation-1"
									className="recomedation-img"
								/>
								<div className="recomendation-text">
									<h6>Gn. Sumeru</h6>
									<p>
										3
										<Rating value={3} />
										10.213 ulasan Google
									</p>
								</div>
							</div>
							<div className="recomendation-item">
								<div className="overlay"></div>
								<img
									src={ImgBackground}
									alt="recomandation-1"
									className="recomedation-img"
								/>
								<div className="recomendation-text">
									<h6>Gn. Sumeru</h6>
									<p>
										3
										<Rating value={3} />
										10.213 ulasan Google
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<p>
						copyright & design by
						<a
							target="_blank"
							rel="noreferrer"
							href="https://fachran-sandi.netlify.app/"
						>
							@sandi
						</a>
						- 2023
					</p>
					<div className="copyright-link">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://fachran-sandi.netlify.app/"
						>
							Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://fachran-sandi.netlify.app/"
						>
							Design
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="mailto:fachransandi@gmail.com"
						>
							contact
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
