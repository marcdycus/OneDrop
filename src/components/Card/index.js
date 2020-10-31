import React from 'react';
import './style.css';

const Card = props => {
    const { title, price } = props;
    
        return (
            <div>
                <li id="listItems">
                    <p id="title">{title}</p>
                    <p id="price">{price}</p>
                </li>
            </div>
        )
}

export default Card;