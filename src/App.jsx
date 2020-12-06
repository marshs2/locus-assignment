import "./App.scss";
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/Header/header.component';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    )
  }
}

export default App;