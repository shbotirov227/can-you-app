import React from 'react';
// import { Link } from "react-router-dom";

import Header from "../../containers/Header/Header";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
// import Card from "../../components/Card/Card";
import { ArrowIcon } from "../../assets/icons";
// import PartnerImg1 from "../../assets/images/partner1.png";
// import PartnerImg2 from "../../assets/images/partner2.png";
// import PartnerImg3 from "../../assets/images/partner3.png";
// import PartnerImg4 from "../../assets/images/partner4.png";
// import CardImg1 from "../../assets/images/cardImg1.png";
// import CardImg2 from "../../assets/images/cardImg2.png";
// import CardImg3 from "../../assets/images/cardImg3.png";
// import AuthorImg1 from "../../assets/images/authorImg1.png";
// import AuthorImg2 from "../../assets/images/authorImg2.png";
// import AuthorImg3 from "../../assets/images/authorImg3.png";
// import AuthorImg4 from "../../assets/images/authorImg4.png";


import "./Home.scss";
import AboutSection from "../../containers/AboutSection/AboutSection";


// let cardData = [
// 	{
// 		id: 0,
// 		image: CardImg1,
// 		status: "Mashhur",
// 		title: "React Native kursi",
// 		price: "$ 350",
// 		avatar: AuthorImg1,
// 		name: "Normatova Nayzangul",
// 		address: "Manchester, Kentucky"
// 	},

// 	{
// 		id: 1,
// 		image: CardImg2,
// 		status: "Yangi",
// 		title: "Java backend kursi",
// 		price: "$ 200",
// 		avatar: AuthorImg2,
// 		name: "Eshmatov Toshmat",
// 		address: "Dr. San Jose, South Dakota"
// 	},

// 	{
// 		id: 2,
// 		image: CardImg3,
// 		status: "Hamyonbop",
// 		title: "Matematika kursi",
// 		price: "$ 129.99",
// 		avatar: AuthorImg3,
// 		name: "Qobilov G'ishmat",
// 		address: "Santa Ana, Illinois"
// 	},

// 	{
// 		id: 3,
// 		image: CardImg1,
// 		status: "Mashhur",
// 		title: "English beginner",
// 		price: "$ 220",
// 		avatar: AuthorImg4,
// 		name: "Opoqi Yanga",
// 		address: "Preston Rd. Inglewood, Maine 98380"
// 	},
// ];

const Home = () => {
	return (
		<div className="Home container">
			<Header />
			
			<div className="Home-inner">
				<div className="Home-left">
					<h2 className="Home-left-title">Yorqin kelajak rivoji uchun <span className="outlined">qulay Platforma</span></h2>
					<p className="Home-left-text">1000 dan ortiq hayotni yaxshi tomonga o'zgartiradigan kurslar</p>
					
					<div className="Home-left-searchSection">
						{/* <LocationIcon /> */}
						<input type="text" placeholder="Qidirish uchun yozing..." />
						<button>Qidirish <ArrowIcon /></button>
					</div>
					
					{/* <div className="Home-left-partners">
						<h3 className="partners-title">Bizning hamkorlarimiz</h3>
						
						<div className="partnerImg">
							<img src={PartnerImg1} alt="" />
							<img src={PartnerImg2} alt="" />
							<img src={PartnerImg3} alt="" />
							<img src={PartnerImg4} alt="" />
						</div>
					</div> */}
				</div>

				<div className="Home-right">
					<HeaderCard />
					<HeaderCard />
					<HeaderCard />
				</div>
			</div>


			{/* <div className="Cards">
				{
					cardData.map(item => (
						<Card
							key={item.id}
							image={item.image}
							status={item.status}
							title={item.title}
							price={item.price}
							avatar={item.avatar}
							name={item.name}
							address={item.address}
						/>
					))
				}
			</div> */}

			<AboutSection />
		</div>
	)
}

export default Home;