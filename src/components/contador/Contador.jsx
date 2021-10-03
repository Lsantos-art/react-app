import "./Contador.css";
import React, { Component } from "react";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial,
    passo: this.props.passoInicial,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (event) => {
    this.setState({
      passo: +event.target.value,
    });
  };

  render() {
    return (
      <div className="contador">
        <h3>Contador</h3>
        <div>
          <label htmlFor="passo">Passo: </label>
          <input
            type="number"
            id="passo"
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div>
        <p>Valor: {this.state.numero}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Contador;
