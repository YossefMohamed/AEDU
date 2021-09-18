import styled from "styled-components";
import Link from "next/link";
import colors from "./colors";
const Button = (props) => {
  return (
    <Link href={props.href} className={props.className}>
      <ButtonStyled>{props.children}</ButtonStyled>
    </Link>
  );
};

const ButtonStyled = styled.a`
  background-color: ${colors.button};
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: fit-content;
  font-size: 2rem;
  color: ${colors.secondary};
  &:hover{
    color: ${colors.font};
  }
`;
export default Button;
