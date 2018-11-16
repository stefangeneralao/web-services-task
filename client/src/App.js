import React from 'react';
import logo from './logo.svg';
import './App.css';
import UrbanDictionaryComponent from './UrbanDictionaryComponent';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://d2gatte9o95jao.cloudfront.net/assets/logo-1b439b7fa6572b659fbef161d8946372f472ef8e7169db1e47d21c91b410b918.svg'} className="App-logo" alt="logo" />
        </header>
        <UrbanDictionaryComponent />
        <UrbanDictionaryComponent />
        <UrbanDictionaryComponent />
        <UrbanDictionaryComponent />
        <UrbanDictionaryComponent />
      </div>
    );
  }
}

export default App;
