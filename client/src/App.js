import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      definition: '',
    };
  }
  
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
      <div className="App">
        <header className="App-header">
          <img src={'https://d2gatte9o95jao.cloudfront.net/assets/logo-1b439b7fa6572b659fbef161d8946372f472ef8e7169db1e47d21c91b410b918.svg'} className="App-logo" alt="logo" />
        </header>
        <main>
          <h2>{ this.state.word }</h2>
          <p>{ this.state.definition }</p>
        </main>
      </div>
    );
  }
}

export default App;
