import React from "react";
import produtos from "../../data/produto";

const ProdutosList = () => {
  const produtosList = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
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
