import styled from "styled-components";
import colors from "../../utils/colors";
import ImageContainer from "./../../utils/ImageContainer";
import Link from "next/link";
import { useState } from "react";
import Post from "../../components/post";

function ClassId() {
  const [post, setPost] = useState(false);
  return (
    <CLassContianerId post={post}>
      <div className="class-cat">
        <div className="time-line">Time Line</div>
        <div className="people">People</div>
        <div className="classwork">ClassWork</div>
      </div>
      <div className="class-time-line">
        <div className="class-cover">
          <ImageContainer
            src="/class-cover.png"
            className="class-cover-image"
          />
        </div>
        <div className="class-make-post">
          <div className="select-container">
            <div className="select-wrapper">
              <span> To :</span>
              {"   "}
              <select className="select">
                <option value="value1" selected>
                  All
                </option>
                <option value="value1">YossefMoahmed@gmail.com</option>
                <option value="value2">HassanMohamed@gmail.com</option>
                <option value="value3">AmalMohamed@gmail.com</option>
              </select>
            </div>
          </div>
          <div className="make-post-class">
            <textarea
              className="class-make-post-text"
              placeHolder="Write Your Announcement..."
              onFocus={(e) => setPost(true)}
            />
          </div>
          <div className="options">
            <div className="make-post-options">
              <div>
                <i className="fas fa-upload"></i>
              </div>
              <div>
                <i className="fas fa-link"></i>{" "}
              </div>
              <div>
                <i className="fas fa-video"></i>{" "}
              </div>
              <div>
                <i className="fas fa-book"></i>
              </div>
            </div>
            <div className="make-post-submit">
              <Link href="#">
                <a>Submit</a>
              </Link>
            </div>
          </div>
        </div>
        <Post />
      </div>
    </CLassContianerId>
  );
}

const CLassContianerId = styled.div`
  .options,
  .select-container {
    transition: 100ms all;
    display: ${(props) => (props.post ? "block" : "none")};
  }
  .select-wrapper {
    margin: 1rem 0;
    padding: 0rem 1rem;

    margin: ${(props) => (props.post ? "1rem 0" : "0 0")};

    & span {
      margin-right: 2rem;
    }
    select {
      border: 2px solid black;
      outline: 0;
    }
  }
  display: flex;
  min-height: 50vh;
  .class-make-post {
    border: 1px solid rgba(0, 0, 0, 0.2);
    .options {
      margin: ${(props) => (props.post ? " 1rem 0 0" : "0 0")};

      display: flex;
      align-items: center;
      justify-content: space-between;
      .make-post-options {
        display: ${(props) => (props.post ? "flex" : "none")};

        padding: 0rem 2rem;
        & > div {
          margin-right: 2rem;
          color: ${colors.main};
          cursor: pointer;
          font-size: 1.5rem;
        }
      }

      .make-post-submit {
        & a {
          background-color: ${colors.button};
          color: ${colors.secondary};
          padding: 1rem 1.5rem;
          border-radius: 5px;
          display: ${(props) => (props.post ? "block" : "none")};
        }
      }
    }
    padding: 1rem;
    margin: 2rem 0 0;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .make-post-class {
      width: 100%;
      height: ${(props) => (props.post ? "15rem" : "10rem")};
    }
    border-radius: 5px;
    &-text {
      background-color: rgba(0, 0, 0, 0.05);
      width: 100%;
      resize: none;

      height: ${(props) => (props.post ? "100%" : "100%")};
      padding: 2rem 1rem;
      border: none;
      border-bottom: 5px solid ${colors.main};
      outline: none;
    }
  }
  .class-cat {
    font-weight: bold;
    width: 15%;
    display: flex;
    flex-direction: column;
    .time-line,
    .people,
    .classwork {
      cursor: pointer;
      margin: 1px 0;
      padding: 1.5rem 1rem;
      &:hover {
        background-color: ${colors.main};
        color: ${colors.secondary};
      }
    }
    .time-line {
      background-color: ${colors.main};
      color: ${colors.secondary};
    }
  }
  .class-time-line {
    width: 85%;
    min-height: 100vh;
    display: flex;
    padding: 0 0 0 2rem;
    flex-direction: column;
    .class-cover {
      height: 25rem;
      display: flex;
      .class-cover-image {
        img {
          object-fit: fill;
          border-radius: 10px;
        }
      }
    }
  }
`;

export default ClassId;
