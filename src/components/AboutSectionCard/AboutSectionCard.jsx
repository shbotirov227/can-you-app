import React from 'react';
import { StarIcon } from "../../assets/icons";

import "./AboutSectionCard.scss";

const AboutSectionCard = (
	{ 
		image,
		cardTitle, 
		cardText,
		authorImg,
		authorName,
		authorJob,
		status
	}) => {
	return (
		<div className="AboutSectionCard">
			<img className="AboutSectionCard-img" src={image} alt="aboutSectionCardImg" />

			<div className="AboutSectionCard-inner">
				<h3 className="title">{cardTitle}</h3>
				<p className="text">{cardText}</p>
				<div className="authorSection">
					<div className="authorInfo">
						<img className="authorImg" src={authorImg} alt="authorImg" />
						<div>
							<h4 className="authorName">{authorName}</h4>
							<span className="authorJob">{authorJob}</span>
						</div>
					</div>
					
					<div className="statusSection">
						<StarIcon />
						<span className="status">{status}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSectionCard;