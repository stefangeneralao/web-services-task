import React from 'react';
import axios from 'axios';

class UrbanDictionaryComponent extends React.Component {
  state = {
    word: '',
    definition: '',
  };

  componentDidMount() {
    axios.get('http://localhost:3001/random')
      .then((res) => {
        const randomWord = res.data;

        axios.get(`http://api.urbandictionary.com/v0/define?term=${ randomWord }`)
          .then((res) => {
            console.log(res.data.list[0].definition);
            this.setState({
              word: randomWord,
              definition: res.data.list[0].definition
            });
          });
      });
  }
  
  render() {
    return (
      <main>
        <h2>{ this.state.word }</h2>
        <p>{ this.state.definition }</p>
      </main>
    );
  }
}

export default UrbanDictionaryComponent;