import React from "react";
import If, { Else } from "./If";

const UsuarioInfo = (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If validator={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
        <br />
        <Else>
            Usuário não informado!
        </Else>
      </If>
    </div>
  );
};

export default UsuarioInfo;
