import styled from "styled-components";

const ButtonStyle = styled.button`
  position: relative;
  border-radius: 50%;
  border: 0;
  font-size: 16px;
  background-color: rgba(200, 200, 200, 0.2);

  user-select: none;
  text-align: center;
  text-decoration: none;

  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */

  width: 25vw;
  height: 45vh;

  cursor: pointer;

  &:hover {
    transition-duration: 0.1s;
    background-color: rgba(0, 32, 32, 0.1);
  }

  &:after {
    border-radius: 50%;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 20px #c8c8c8;
  }

  &:active:after {
    box-shadow: 0 0 0 0 #c8c8c8;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }

  &:active {
    top: 1px;
  }
`;

export default ButtonStyle;
