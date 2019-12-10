import React, { Component } from 'react';
import '../App.css';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: null ,
      idade: null,
      estadoCivil: null
    }
  }

  mudarNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  }
  mudarIdade = (e) => {
    this.setState({
      idade: e.target.value,
    });
  }
  mudarEstado = (e) => {
    this.setState({
      estadoCivil: e.target.value
    });
  }


  render() {
    return (
        <form className="form">
            <label id='label'>
            Nome:
            <input type='text' onChange={this.mudarNome} ></input>
            Idade:
            <input type='text' onChange={this.mudarIdade} ></input>
            Estado Civil:
            <input type='text' onChange={this.mudarEstado} ></input>
            </label>
            <p>Dados: </p>
            <div className="box-saida">
            <p>{this.state.nome}</p>
            <p>{this.state.idade}</p>
            <p>{this.state.estadoCivil}</p>
            </div>
        </form>     
    );
  }
}

export default Formulario;
