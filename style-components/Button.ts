import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
`;

//default
Button.defaultProps = {
  theme: {
    bg: "white",
    fontColor: "black",
  },
};

export default Button;
