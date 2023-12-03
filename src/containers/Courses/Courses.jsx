import React from 'react';
import Course from "../../components/Course/Course";
import CourseImg from "../../assets/images/courseImg.png";
import AuthorImg1 from "../../assets/images/authorImg1.png";

import "./Courses.scss";


const data = [
	{
		id: 0,
		image: CourseImg,
		authImg: AuthorImg1,
		authName: "Dianne Russell",
		courseName: "The things we need to check when we want to buy a house",
		duration: "4 min read | 25 Apr 2021"
	},

	{
		id: 1,
		image: CourseImg,
		authImg: AuthorImg1,
		authName: "Courtney Henry",
		courseName: "7 Ways to distinguish the quality of the house we want to buy",
		duration: "6 min read | 24 Apr 2021"
	},

	{
		id: 2,
		image: CourseImg,
		authImg: AuthorImg1,
		authName: "Darlene Robertson",
		courseName: "The best way to know the quality of the house we want to buy",
		duration: "4 min read | 25 Apr 2021"
	},

	{
		id: 3,
		image: CourseImg,
		authImg: AuthorImg1,
		authName: "Dianne Russell",
		courseName: "The things we need to check when we want to buy a house",
		duration: "4 min read | 25 Apr 2021"
	},

	{
		id: 4,
		image: CourseImg,
		authImg: AuthorImg1,
		authName: "Dianne Russell",
		courseName: "The things we need to check when we want to buy a house",
		duration: "4 min read | 25 Apr 2021"
	},

	{
		id: 4,
		image: CourseImg,
		authImg: AuthorImg1,
		authName: "Dianne Russell",
		courseName: "The things we need to check when we want to buy a house",
		duration: "4 min read | 25 Apr 2021"
	},
];


const Courses = () => {
	return (
		<div className="Courses container">
			<h2 className="AboutSection-title">Find out more about<br></br> selling and buying homes</h2>

			<div className="Courses-inner">
				{
					data.map(el => (
						<Course
							key={el.id}
							image={el.image}
							authImg={el.authImg}
							authName={el.authName}
							courseName={el.courseName}
							duration={el.duration}
						/>
					))
				}

			</div>
		</div>
	)
}

export default Courses;