import styled from "styled-components";
import colors from "../utils/colors";
import Link from "next/link";
import ClassCard from "../components/classCard";
function MyProfile() {
  return (
    <MyProfileContainer>
      <div className="user_info">
        <img src="user1.png" />
        <div className="user_name">
          <span>Yossef Mohamed</span>
          <span>yossefmohamed112233@gmail.com</span>
        </div>
        <Link href="#">
          <a className="myLink button">Edit</a>
        </Link>
      </div>
      <div className="class-container">
        <h2>My Classes</h2>
        <div className="flex-class">
          <div className="card-width">
            <ClassCard />
          </div>
          <div className="card-width">
            <ClassCard />
          </div>
          <div className="card-width">
            <ClassCard />
          </div>
          <div className="card-width">
            <ClassCard />
          </div>
          <div className="card-width">
            <ClassCard />
          </div>
          <div className="card-width">
            <ClassCard />
          </div>
          <div className="card-width">
            <ClassCard />
          </div>
          <div className="card-width">
            <ClassCard />
          </div>
          <div className="card-width">
            <ClassCard />
          </div>
        </div>
      </div>
    </MyProfileContainer>
  );
}
const MyProfileContainer = styled.div`
  width: 100%;
  min-height: 50rem;
  background-color: white;
  .class-container {
    padding: 5rem;

    .card-width {
      width: 31%;
      margin-bottom: 4rem;
    }
    h2 {
      margin: 2rem 0 10rem 0;
      font-size: 4.5rem;
    }
    .flex-class {
      display: flex;
      flex-wrap: wrap;

      justify-content: space-between;
    }
  }
  .user_info {
    padding: 8rem 5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    height: 10rem;
    align-items: center;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user_name {
      display: flex;
      flex-direction: column;
      margin-left: 2rem;
      height: 100%;
      justify-content: center;
      span {
        margin: 0.5rem 0;
        font-size: 1.7rem;
      }
    }
    .button {
      background-color: red;
      padding: 1.5rem 3rem;
      margin-left: auto;
      background-color: ${colors.button};
      border-radius: 5px;
      color: white;
      transition: 100ms all ease;
      & :hover {
        color: black;
      }
      .myLink {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default MyProfile;
