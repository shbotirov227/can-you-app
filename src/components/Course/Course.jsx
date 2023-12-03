import React from 'react';

import "./Course.scss";

const Course = ({ image, authImg, authName, courseName, duration }) => {
	return (
		<div className="Course">
			<img className="Course-img" src={image} alt="courseImg" />

			<div className="Course-info">
				<div className="courseAuthorNameSection">
					<img className="Course-authImg" src={authImg} alt="authImg" />
					<span className="Course-authName">{authName}</span>
				</div>

				<h4 className="Course-courseName">{courseName}</h4>
				<span className="Course-duration">{duration}</span>
			</div>
		</div>
	)
}

export default Course;