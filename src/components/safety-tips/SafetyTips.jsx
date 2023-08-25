import React from "react";

import "./safety-tips.scss";
import Heading from "../heading/Heading";

const tipsBromo = [
	{
		id: 1,
		img: "./images/tips/aturan.png",
		heading: "Ikuti Peraturan dan Arahan",
		overlay:
			"Selalu patuhi petunjuk dan peraturan dari petugas atau pemandu lokal. Mereka memiliki pengetahuan tentang kondisi terbaru dan akan memberikan instruksi yang diperlukan untuk menjaga keamanan Anda.",
	},
	{
		id: 2,
		img: "./images/tips/zona.png",
		heading: "Jangan Memasuki Zona Berbahaya",
		overlay:
			"Ada zona-zona tertentu yang bisa menjadi berbahaya karena aktivitas vulkanik atau perubahan cuaca tiba-tiba. Pastikan Anda hanya berada di area yang dinyatakan aman oleh otoritas setempat.",
	},
	{
		id: 3,
		img: "./images/tips/kawah.png",
		heading: "Hindari Kawah Selama Erupsi",
		overlay:
			"Jika terjadi aktivitas erupsi atau tanda-tanda awal erupsi, hindari kawasan kawah dan ikuti petunjuk evakuasi jika diperlukan.",
	},
	{
		id: 4,
		img: "./images/tips/pemandu.png",
		heading: "Gunakan Pemandu Lokal",
		overlay:
			" Jika Anda tidak familiar dengan wilayah Gunung Bromo, disarankan untuk menggunakan pemandu lokal yang berpengalaman. Mereka akan membantu menjaga keamanan Anda dan memberikan informasi yang berharga.",
	},
];

const SafetyTips = () => {
	return (
		<div id="safety-tips">
			<Heading
				mainHeading={"Tips Keamanan"}
				subHeading={
					"Tips keselamatan dan peraturan penting yang harus diikuti oleh para pengunjung selama berada di Gunung Bromo"
				}
			/>
			<div className="safety-tips-content">
				{tipsBromo.map((tips) => (
					<div className="card2" key={tips.id}>
						<div className="card2-img">
							<img src={tips.img} alt="" />
						</div>
						<div className="card2-heading">{tips.heading}</div>
						<div className="card2-overlay">
							<p>{tips.overlay}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SafetyTips;
