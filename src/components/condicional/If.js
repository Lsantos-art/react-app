export default function If(props) {
  const elseChild = props.children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  const ifChild = props.children.filter((child) => {
    return child !== elseChild;
  });

  if (props.validator) {
    return ifChild;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
}

export const Else = (props) => props.children;
