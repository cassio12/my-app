import React, { Component } from 'react';
import '../App.css';

class botao extends Component {
  constructor(props){
    super(props);

    this.state = {
      saida: null
    }
}
renderTxt = (text) => {
  this.setState ({
    saida: text
  })
  // console.log('olaaa')
}

  render() {
    return (
      <div className="box-botao">
        <button onClick={() => this.renderTxt(this.props.parametro)} 
        className="botao">{this.props.value}</button>
        <h1>{this.state.saida}</h1>
      </div>
    );
  }
}

export default botao;
