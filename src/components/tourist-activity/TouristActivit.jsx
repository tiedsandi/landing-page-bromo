import React from "react";

import Heading from "../heading/Heading";
import "./tourist-activity.scss";

const activityAtBromo = [
	{
		img: "./images/mendaki-gunung.png",
		heading: "Mendaki Menuju Kawah Bromo",
		subheading:
			"Rasa petualangan akan menyertai Anda saat Anda mendaki menuju kawah aktif Gunung Bromo. Nikmati perjalanan melalui lahan pasir berombak yang unik sebelum mencapai kawah yang mendalam dan menyaksikan kegiatan vulkanik dari jarak dekat.",
	},
	{
		img: "./images/bersepeda.png",
		heading: "Bersepeda di Sekitar Gunung",
		subheading:
			"Jika Anda mencari pengalaman yang lebih bersemangat, bersepeda di sekitar Gunung Bromo bisa menjadi pilihan. Nikmati hembusan angin segar dan pemandangan lanskap vulkanik yang menakjubkan sambil mengeksplorasi area sekitar.",
	},
	{
		img: "./images/adat.png",
		heading: "Mengunjungi Desa Tenggerese",
		subheading:
			"Temui suku Tenggerese yang khas dan pelajari tentang budaya mereka. Anda bisa berinteraksi dengan penduduk lokal, melihat upacara adat, dan merasakan keramahan mereka.",
	},
	{
		img: "./images/fotografi.png",
		heading: "Fotografi yang Spektakuler",
		subheading:
			"Gunung Bromo adalah surga bagi para fotografer. Jepretan matahari terbit di Puncak Penanjakan, kabut yang menyelubungi kawah, dan pemandangan epik lainnya akan menciptakan momen fotografi yang tak terlupakan.",
	},
];

const TouristActivit = () => {
	return (
		<div id="tourist-activity">
			<Heading
				mainHeading={"Aktivitas Wisata"}
				subHeading={"Aktivitas wisata yang dapat dilakukan di Gunung Bromo"}
			/>
			<div className="tourist-wrapper">
				{activityAtBromo.map((activity, index) => (
					<div className="card" key={index}>
						<div className="card-img">
							<img src={activity.img} alt="" />
						</div>
						<div className="card-footer">
							<div className="card-heading">{activity.heading}</div>
							<div className="card-subheading">{activity.subheading}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TouristActivit;
