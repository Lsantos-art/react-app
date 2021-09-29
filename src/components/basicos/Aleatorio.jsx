import React from "react";

export default (props) => {
  const { min, max } = props;
  const result = parseInt(Math.random() * (max - min) + min);

  return (
    <div>
      <p>
        <strong>Valor mínimo:</strong> {min}
      </p>
      <p>
        <strong>Valor máximo:</strong> {max}
      </p>
      <p>
        <strong>Resultado:</strong> {result}
      </p>
    </div>
  );
};
