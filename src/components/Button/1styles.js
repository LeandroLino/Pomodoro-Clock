import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 25vw;
  height: 25vw;

  border-radius: 50%;
  border: 0;

  background-color: rgba(255, 255, 255, 0.3);

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    border-radius: 50%;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px white;
  }

  &:active:after {
    display: block;
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export default ButtonStyle;
