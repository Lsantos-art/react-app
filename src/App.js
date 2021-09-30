import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import './App.css'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListAlunos from "./components/repeticao/ListaAlunos";
import ProdutosList from "./components/repeticao/TabelaProdutos";

const app = () => (
  <div className="app">
    <h1>React App</h1>
    <hr/>
    <div className="cards">
      <Card titulo="#01 - Primeiro" color="#E67E22">
        <Primeiro />
      </Card>
      <Card titulo="#02 - Com Parametro" color="#B03A2E">
        <ComParametro titulo="Primeiro aluno" aluno="Kenan" nota={10} />
      </Card>
      <Card titulo="#03 - Aleatorio" color="#212F3C">
        <Aleatorio max={10} min={1} />
      </Card>
      <Card titulo="#04 - Com filhos" color="#2471A3">
        <Familia  sobrenome="Kowalski">
          <FamiliaMembro nome="Lindomar"/>
          <FamiliaMembro nome="Lucia"/>
          <FamiliaMembro nome="Kenan"/>
          <FamiliaMembro nome="Kell"/>
        </Familia>
      </Card>
      <Card titulo="#05 - Repeticao" color="#2ECC71">
        <ListAlunos />
      </Card>
      <Card titulo="#06 - Repeticao Produtos desafio" color="#F1C40F">
        <ProdutosList />
      </Card>
    </div>
  </div>
);

export default app;