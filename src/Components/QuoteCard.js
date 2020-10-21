import React from 'react';
import PropTypes from 'prop-types';
import '../style/QuoteCard.css';



const QuoteCard = ({card}) => {

    return (
        <figure className="QuoteCard">
            <img
                src={card.image}
                alt={card.character} />
            <figcaption>
                <blockquote>
                    {card.quote}
                </blockquote>
                <p>
                    <cite>{card.character}</cite>
                </p>
            </figcaption>
            
        </figure>
    )
}


QuoteCard.propTypes = {
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
export default QuoteCard;