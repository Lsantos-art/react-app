import React from "react";
import "./Card.css";

const card = (props) => {

  const style = {
      backgroundColor: props.color || 'rgb(0, 0, 0)',
      borderColor: props.color || 'rgb(0, 0, 0)',
  }

  return (
    <div className="card" style={ style }>
      <div className="title">{props.titulo}</div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default card;
