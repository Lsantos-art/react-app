import React from "react";

const ComParametro = (props) => {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>
        {props.aluno} tem a nota {props.nota}
      </h3>
      Situação: <strong>{status}</strong>
    </div>
  );
}

export default ComParametro;