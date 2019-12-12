import React, { Component } from 'react';
import Menu from './components/menu';
// import Parametro from './components/parametro';
// import Formulario from './components/formulario';
// import Emojis from './components/emoji';
// import Props from './components/props';

import Imagem1 from './components/imagem1';
import Imagem2 from './components/imagem2';
import Imagem3 from './components/imagem3';
import Imagem4 from './components/imagem4';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuItens: [
        'verão',
        'inverno',
        'outono',
        'primavera',
      ],
      renderizado: null,
    }
  }
  henderImg = (el) => {
    switch (el.target.text) {
      case 'verão':
        return this.setState({
          renderizado: <Imagem1/>
        });
      case 'inverno':
        return this.setState({
          renderizado: <Imagem2/>
        });
      case 'outono':
        return this.setState({
          renderizado: <Imagem3/>
        });
      case 'primavera':
        return this.setState({
          renderizado: <Imagem4/>
        });
      default:
        return null  
    }
  }
  render() {
    return (
      <div className="App">
        <Menu funcao={(el) => this.henderImg(el)} mapeamento={this.state.menuItens}/>
        {this.state.renderizado}
        {/* <Parametro/> */}
          {/* <Emojis/> */}
          {/* <Formulario/> */}
          {/* <Props /> */}
      </div>
    );
  }
}

export default App;
