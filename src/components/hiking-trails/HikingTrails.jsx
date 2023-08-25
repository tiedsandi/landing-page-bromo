import React from "react";

import "./hiking-trails.scss";
import Heading from "../heading/Heading";

import MapHiking from "../../assets/imgs/map.png";

const HikingTrails = () => {
	return (
		<div id="hiking-trails">
			<div className="hiking-trails-wrapper">
				<Heading
					mainHeading={"Rute Pendakian"}
					subHeading={
						"Berbagai rute pendakian yang memungkinkan. Setiap rute memiliki karakteristiknya sendiri dan memberikan pengalaman yang unik."
					}
				/>

				<div className="hiking-trails-content">
					<div className="hiking-trails-image">
						<img src={MapHiking} alt="map" />
					</div>
					<div className="hiking-trails-text">
						<h1>Rute dari Probolinggo</h1>
						<p className="hiking-trails-pragraph">
							Rute ini adalah yang paling umum digunakan oleh wisatawan. Anda
							akan mencapai desa Cemoro Lawang terlebih dahulu. Dari sana, Anda
							dapat berjalan kaki atau menggunakan kendaraan (termasuk jip
							sewaan) untuk mencapai Puncak Penanjakan, tempat yang populer
							untuk menyaksikan matahari terbit dengan pemandangan Gunung Bromo
							dan Gunung Semeru di kejauhan.
							<br />
							Setelah itu, Anda dapat melanjutkan perjalanan dengan berjalan
							kaki atau naik kuda menuju Lautan Pasir (Sea of Sand) dan kemudian
							mendaki ke Kawah Bromo.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HikingTrails;
