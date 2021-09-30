import React from "react";

const FamiliaMembro = (props) => {
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
};

export default FamiliaMembro;
