import React from "react";

const ParOuImpar = (props) => {
  const isPar = props.numero % 2;
  return (
    <div>
      <span>
        <strong>Número {props.numero}:</strong>
        {isPar === 1 ? "Ímpar" : "Par"}
      </span>
    </div>
  );
};

export default ParOuImpar;
