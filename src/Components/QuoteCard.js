import React from 'react';
import '../style/QuoteCard.css';
import axios from 'axios';

const defaultCard = {
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
}

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: defaultCard,
        }
    }

    changeQuote = () => {
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then(responses => responses.data)
            .then(data => this.setState({
                card: data[0]
            }))
    }

    render() {

        const { image, character, quote } = this.state.card;

        return (
            <div>
                <figure className="QuoteCard">
                    <img
                        src={image}
                        alt={character} />
                    <figcaption>
                        <blockquote>
                            {quote}
                        </blockquote>
                        <p>
                            <cite>{character}</cite>
                        </p>
                    </figcaption>
                </figure>
                <button onClick={() => this.changeQuote()}>Change quote</button>
            </div>
        )
    }
}

export default QuoteCard;