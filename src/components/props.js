import React from 'react';
import Button from './botao'

class Parametro extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentCount: 1
        };
    }
    handleIncrement = (estado) => {
        this.setState({
            currentCount: estado
        });
    }
   
    render() {
        return (
            <div>
                <Button value="Submit" parametro='quem'/>
                <Button value="Submit" parametro='é'/>
                <Button value="Submit" parametro='você'/>
                <button onClick={() => this.handleIncrement(this.state.currentCount-1)}>-</button>
                <button onClick={() => this.handleIncrement(this.state.currentCount+1)}>+</button>
                <button onClick={() => this.handleIncrement(0)}>zerar</button>
                {this.state.currentCount}
                
            </div>
        )
    }
}
export default Parametro;