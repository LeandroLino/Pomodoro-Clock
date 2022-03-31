import ButtonStyle from "./styles";

function Button({ children, onClick }) {
  return <ButtonStyle onClick={() => onClick()}>{children}</ButtonStyle>;
}

export default Button;
