import React from 'react';
import '../style/QuoteCard.css';
import Quote from './Quote';
import axios from 'axios';

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card : null,
        }
    }

    componentDidMount = () => {
        this.changeQuote();
    }

    changeQuote = () => {
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then(responses => responses.data)
            .then(data => this.setState({
                card: data[0]
            }))
    }

    render() {  
        return (
            <div>
            {
                this.state.card 
                ? <Quote card={this.state.card}/>
                : <div className="no-data">Loading...</div>
            }
                <button onClick={() => this.changeQuote()}>Change quote</button>
            </div>
        )
    }
}

export default QuoteCard;