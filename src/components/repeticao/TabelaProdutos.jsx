import React from "react";
import produtos from "../../data/produto";
import './TabelaProdutos.css';

const ProdutosList = () => {

  const produtosList = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'par' : ''}>
        <td>
          <small>{produto.id}</small>
        </td>
        <td>
          <small>{produto.nome}</small>
        </td>
        <td>
          <small>R${produto.preco}</small>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PREÇO</th>
          </tr>
        </thead>
        <tbody>{produtosList}</tbody>
      </table>
    </div>
  );
};

export default ProdutosList;
