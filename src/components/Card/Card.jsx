import React from 'react';

import "./Card.scss";

const Card = ({ image, status, title, price, avatar, name, address}) => {
    return (
        <div className="Card">
            <img className="Card-img" src={image} alt="" />
            <span className="Card-status">{status}</span>
            <h4 className="Card-title">{title}</h4>
            <h4 className="Card-price">{price}</h4>

            <div className="Card-author">
                <img className="Card-author-avatar" src={avatar} alt="avatar" />

                <div>
                    <h5 className="Card-author-name">{name}</h5>
                    <span className="Card-author-address">{address}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;