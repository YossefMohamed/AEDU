import styled from "styled-components";

const ClassCard = () => {
  return (
    <ContainerCard>
      <div class="card">
        <div class="card-top">
          <h2 class="title">Computer Science 2022</h2>
        </div>

        <div class="media-card">
          <img src="class-cover.png" />
        </div>
      </div>
    </ContainerCard>
  );
};
const ContainerCard = styled.div`
  height: 30rem;
  width: 100%;
  cursor: pointer;
  .card {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 15px 15px 0 0;
    flex-direction: column;
    .media-card {
      flex: 1;
      img {
        height: 100%;
        width: 100%;

        object-fit: cover;
      }
    }
    .card-top {
      height: 20%;
      .title {
        font-size: 1.7rem;
        width: 100%;
        text-align: left;
        display: flex;
        align-items: center;
        height: 100%;
        overflow: auto;
        margin: 0;
      }
      text-align: center;
      display: flex;
      align-items: center;
      padding: 1rem;
    }
  }
`;
export default ClassCard;
