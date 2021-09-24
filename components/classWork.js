import styled from "styled-components";
import colors from "../utils/colors";

function ClassWork() {
  return (
    <ClassWorkContainer>
      <div className="date-material">
        <div className="title">
          <h1>Aug 27, 2019</h1>
        </div>
        <div className="material">
          <div className="file-container">
            <div className="file-row">
              <div className="file">
                <i class="fas fa-file"></i>
              </div>
              <div className="file-details">SVM.dox</div>
            </div>
          </div>{" "}
        </div>
      </div>
    </ClassWorkContainer>
  );
}
const ClassWorkContainer = styled.div`
  padding: 0 0 0 2rem;
  width: 80%;
  .date-material {
    &:nth-of-type(1) {
      margin-top: 0rem;
    }
    margin-top: 5rem;
    .title {
      font-size: 2rem;
      border-bottom: 5px solid ${colors.main};

      h1 {
        padding: 0;
        margin: 0 0 2rem 0;
      }
    }
    .file-container {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      .file-row {
        display: flex;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
        margin: 1.2rem 0;
        height: fit-content;
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      .file-details {
        padding-left: 4rem;
      }
      .file {
        padding: 1.5rem 2rem;
        font-size: 4rem;
        display: flex;
        width: fit-content;
        background-color: rgba(0, 0, 0, 0.2);

        color: ${colors.main};
      }
    }
  }
`;
export default ClassWork;
