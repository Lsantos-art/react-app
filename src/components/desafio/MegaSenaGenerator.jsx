import React, { Component } from "react";
import "./MegaSenaGenerator.css";

class Megasenagenerator extends Component {
  state = {
    arryNum: Array(6).fill(0),
    limit: 6,
  };

  setQtd = (event) => {
    this.setState({
      limit: +event.target.value,
    });
  };

  setNewArray = (newArray) => {
    this.setState({
      arryNum: newArray,
    });
  };

  arrGenerator = () => {
    this.setState({
      arryNum: [],
    });

    let newArray = [];
    let i = 0;
    while (i < this.state.limit) {
      let aleatorio = parseInt(Math.random() * (60 - 1) + 1);
      if (!newArray.includes(aleatorio)) {
        newArray.push(aleatorio);
        i++;
      }
    }
    this.setNewArray(newArray.sort((a, b) => a - b));
  };

  render() {
    return (
      <div className="megasena">
        <h4>Gerador de numeros mega-sena</h4>
        <label htmlFor="qtd">Aposta de:</label>
        <input
          min="6"
          max="15"
          type="number"
          id="qtd"
          value={this.state.limit}
          onChange={this.setQtd}
        />
        <button onClick={this.arrGenerator}>Gerar</button>
        <hr />
        <div className="numDiv">{this.state.arryNum.join("  ")}</div>
      </div>
    );
  }
}

export default Megasenagenerator;
