import React from 'react';
import './App.css';
import QuoteCard from './Components/QuoteCard';
import axios from 'axios';

const cardDefault = {
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
}

class App extends React.Component{
  constructor(props) {
  super(props);
    this.state = {
      card : cardDefault,
    }
  }

  changeQuote = () => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(responses => responses.data)
      .then(data => this.setState({
          card : data[0]
      }))
  }

  render(){
    return (
      <div>
        <QuoteCard card={this.state.card}/>
        
        <button onClick={() => this.changeQuote()}>Change quote</button>
      </div>
    );
  }
}

export default App;
