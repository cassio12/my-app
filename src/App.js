import React, { Component } from 'react';
// import Formulario from './components/formulario';
import Emojis from './components/emoji';
// import Props from './components/props'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Emojis/>
          {/* <Formulario/> */}
          {/* <Props /> */}
      </div>
    );
  }
}

export default App;
