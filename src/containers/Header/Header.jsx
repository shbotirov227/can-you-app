import React from 'react';
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./Header.scss";

const Header = () => {
	return (
		<div className="Header">

			
			<Link to="/"><img className="logo" src={Logo} alt="" /></Link>

			<div className="navbar">
				<Link className="navbar-btn" to="/about-us">Biz haqimizda</Link>
				<Link className="navbar-btn" to="/news">Yangiliklar</Link>
				<select className="navbar-btn" name="lang" id="lang">
					<option value="oz">O'z</option>
					<option value="ru">Ru</option>
					<option value="en">Eng</option>
				</select>
				<Link className="navbar-btn signup" to="/login">Ro'yxatdan o'tish</Link>
			</div>
			
		</div>
	)
}

export default Header;