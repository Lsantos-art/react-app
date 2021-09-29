import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => (
  <div>
    <h1>React App</h1>
    <hr/>
    <div id="app">
      <Card titulo="#01 - Primeiro">
        <Primeiro />
      </Card>
      <Card titulo="#02 - Com Parametro">
        <ComParametro titulo="Primeiro aluno" aluno="Kenan" nota={10} />
      </Card>
      <Card titulo="#03 - Aleatorio">
        <Aleatorio max={10} min={1} />
      </Card>
    </div>
  </div>
);
