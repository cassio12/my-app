import React from 'react';
import Lupa from '../img/lupa.jpeg'
import '../App.css'

class Emoji extends React.Component {
    constructor(props) {
			super(props);

			this.state = {
				resultFiltro:  null,
				emojis: [
					{
						nome: 'pizza',
						icon: '🍕',
					},
					{
						nome: 'jack-o-lantern',
						icon: '🎃',
					},
					{
						nome: 'ghost',
						icon: '👻',
					},
					{
						nome: 'alien',
						icon: '👽',
					},
					{
						nome: 'robot',
						icon: '🤖',
					},
					{
						nome: 'olhos',
						icon: '👀',
					},
					{
						nome: 'dragão',
						icon: '🐉',
					},
					{
						nome: 'bird',
						icon: '🐦',
					},
					{
						nome: 'hi-5',
						icon: '🖐',
					},
					{
						nome: 'sorrizo',
						icon: '😀'
					},
					{
						nome: 'smile',
						icon: '😊'
					},
					{
						nome: 'like a boss',
						icon: '😎'
					}
				]
			}
    }
    
		henderFiltro = () => {
			const entrada = document.querySelector('#input')
			this.filtro(entrada.value)
		}

		filtro = (txt) => {
			this.state.emojis.map(item => {
				if (txt == item.nome){
					this.setState({
						resultFiltro: item.icon,
					})
				}
				else{
					return null;
				}
			})
		}

    render(){
			return(
				<div className='container'>
					<div className='box-pesquisa'>
						<input id='input' type="text" placeholder='digite o nome de um emoji'></input>
						<button className='button' onClick={(e) => this.henderFiltro(e)}>
							<img className='imgButton' src={Lupa}/>
						</button>
					</div>
					<h1>{this.state.resultFiltro}</h1>
				</div>
			)
    }
}
export default Emoji;