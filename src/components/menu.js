import React from 'react';
import '../App.css'

class Menu extends React.Component {
    constructor(props){
        super(props);

        
    }

    openMenu = () => {
        if (document.querySelector('.itensRenderizados').style.display == '') {
            document.querySelector('.itensRenderizados').style.display = 'flex'
        }
        else {
            document.querySelector('.itensRenderizados').style.display = ''
        }
    }
    
    render() {
        return(
            <div className='container-menu'>
                <div onClick={() => this.openMenu()} className='box-menu' >
                    <div className='div'></div>
                    <div className='div'></div>
                    <div className='div'></div>
                </div>
                <div className='itensRenderizados'>
                    {this.props.mapeamento.map((item, index) => {
                        return(
                            <a onClick={this.props.funcao} key={index} className='itensMenu' href="#" >{item}</a>
                        )
                    })}
                </div>    
               
            </div>
        )
    }
}
export default Menu;