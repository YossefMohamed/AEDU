import styled from "styled-components";
import ImageContainer from "./../../utils/ImageContainer";
function ClassesHome() {
  return (
    <CLassContainer>
      <div className="create-class">
        <ImageContainer src="/create.png" className="class-image-container" />
        <h2>Create A Class</h2>
      </div>{" "}
      <div className="join-class">
        <ImageContainer src="/join.png" className="class-image-container" />
        <h2>Join A Class</h2>
      </div>
    </CLassContainer>
  );
}

export default ClassesHome;

const CLassContainer = styled.div`
  margin: 10rem 0;
  display: flex;
  justify-content: space-around;
  .class-image-container {
    width: 100%;
    height: 30rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .create-class,
  .join-class {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
  & h2 {
    font-size: 3.75rem;
    text-align: center;
  }
`;
