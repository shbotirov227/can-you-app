import React from 'react';
import HeaderCardAvatar from "../../assets/images/headerCardAvatar.png";

import "./HeaderCard.scss";

const HeaderCard = () => {
	return (
		<div className="HeaderCard">
			<img className="HeaderCard-img" src={HeaderCardAvatar} alt="" />
			
			<div>
				<h4 className="HeaderCard-title">56K soat</h4>
				<span className="HeaderCard-text">Yuklangan darslar</span>
			</div>
		</div>
	)
}

export default HeaderCard;