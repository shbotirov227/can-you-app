import React from 'react'
import AboutSectionCard from "../../components/AboutSectionCard/AboutSectionCard";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import AboutCardImg1 from "../../assets/images/aboutSectionImg1.png";
import AuthorImg1 from "../../assets/images/authorImg1.png";
import AuthorImg2 from "../../assets/images/authorImg2.png";
import AuthorImg3 from "../../assets/images/authorImg3.png";


import "./AboutSection.scss";


const aboutSectionCardData = [
	{
		id: 0,
		image: AboutCardImg1,
		cardTitle: "Best! I got the house I wanted through Hounter",
		cardText: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
		authorImg: AuthorImg1,
		authorName: "Dianne Russell",
		authorJob: "Manager Director",
		status: "4.6",
	},
	{
		id: 1,
		image: AboutCardImg1,
		cardTitle: "Through the Hounter, I can get a house for my self",
		cardText: "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
		authorImg: AuthorImg2,
		authorName: "Esther Howard",
		authorJob: "Head of Marketing",
		status: "4.1",
	},
	{
		id: 2,
		image: AboutCardImg1,
		cardTitle: "My house sold out fast!",
		cardText: "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
		authorImg: AuthorImg3,
		authorName: "Courtney Henry",
		authorJob: "CEO Andarafish",
		status: "",
	},
	{
		id: 3,
		image: AboutCardImg1,
		cardTitle: "Through the Hounter, I can get a house for my self",
		cardText: "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
		authorImg: AuthorImg2,
		authorName: "Esther Howard",
		authorJob: "Head of Marketing",
		status: "4.1",
	},
];


const AboutSection = () => {
	return (
		<div className="AboutSection">
			<h2 className="AboutSection-title">Biz haqimizda foydalanuvchilar fikrlari</h2>

			<div className="AboutSection-cards" style={{display: "flex"}}>
				{
					aboutSectionCardData.map((data) => (
						
					// <Swiper
					// 	modules={[Navigation, Pagination, Scrollbar, A11y]}
					// 	spaceBetween={50}
					// 	slidesPerView={3}
					// 	navigation
					// 	pagination={{ clickable: true }}
					// 	scrollbar={{ draggable: true }}
					// 	onSwiper={(swiper) => console.log(swiper)}
					// 	onSlideChange={() => console.log('slide change')}
					// 	>
					// 	<SwiperSlide>
							<AboutSectionCard
								key={data.id}
								image={data.image}
								cardTitle={data.cardTitle}
								cardText={data.cardText}
								authorImg={data.authorImg}
								authorName={data.authorName}
								authorJob={data.authorJob}
								status={data.status}
							/>
					// 	</SwiperSlide>
					// </Swiper>
					))					
				}
			</div>

		</div>
	)
}

export default AboutSection;