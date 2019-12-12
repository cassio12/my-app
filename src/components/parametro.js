import React from 'react';

class Parametro extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            renderizado: ''
        }
    }
    handleIncrement = (entrada) => {
        this.setState({
            renderizado: entrada
        });
    }
    render() {
        return(
            <div>
                <button onClick={() => this.handleIncrement('google')}>ok</button>
                <button onClick={() => this.handleIncrement('facebook')}>ok</button>
                <button onClick={() => this.handleIncrement('orkut')}>ok</button>
                { this.state.renderizado === "google" && <img src='https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'/>}
            </div>
        )
    }
}

export default Parametro;