import styled from "styled-components";
import colors from "../utils/colors";
import Link from "next/link";

function Footer() {
  return (
    <FooterContainer>
      <div className="footercopy">Copyright ©2021 AEDU</div>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  padding: 3rem 0;
  background-color: ${colors.main};
  text-align: center;
  color: ${colors.secondary};
  font-size: 2rem;
`;
export default Footer;
