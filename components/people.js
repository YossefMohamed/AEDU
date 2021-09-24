import styled from "styled-components";
import colors from "../utils/colors";

function People() {
  return (
    <PeopleContainer>
      <div className="teacher-container">
        <div className="title">
          <h1>Teachers</h1>
        </div>
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>
      </div>{" "}
      <div className="student-container">
        <div className="title">
          <h1>Students</h1>
        </div>
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>{" "}
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>{" "}
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>{" "}
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>{" "}
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>{" "}
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>{" "}
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>
        <div className="people">
          <img src="/user1.png" />
          <span>Yossef Mohamed</span>
        </div>
      </div>
    </PeopleContainer>
  );
}
const PeopleContainer = styled.div`
  width: 80%;
  padding: 0 0 0 2rem;
  .student-container {
    margin-top: 5rem;
  }
  .teacher-container,
  .student-container {
    width: 100%;
    display: flex;
    h1 {
      margin: 0 0 2rem 0;
    }
    .people {
      display: flex;
      align-items: center;
      border-top: 1px solid ${colors.main};
      font-size: 1.9rem;
      padding: 1.5rem 1rem;
      span {
        margin-left: 2rem;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    flex-direction: column;
    .title {
      font-size: 2rem;
      border-bottom: 1px solid ${colors.main};
    }
  }
`;
export default People;
