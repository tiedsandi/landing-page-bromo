import React from "react";
import "./rating.scss";

const Rating = ({ value }) => {
	const maxStars = 5;
	const fullStars = Math.floor(value);
	const hasHalfStar = value - fullStars >= 0.5;

	const renderStars = () => {
		const stars = [];

		for (let i = 1; i <= maxStars; i++) {
			if (i <= fullStars) {
				stars.push(
					<span key={i} className="star yellow">
						★
					</span>
				);
			} else if (hasHalfStar && i === fullStars + 1) {
				stars.push(
					<span key={i} className="star half-yellow">
						★
					</span>
				);
			} else {
				stars.push(
					<span key={i} className="star gray">
						★
					</span>
				);
			}
		}

		return stars;
	};

	return <div className="rating">{renderStars()}</div>;
};

export default Rating;
