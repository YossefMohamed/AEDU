import styled from "styled-components";
import colors from "../../../utils/colors";
import ImageContainer from "./../../../utils/ImageContainer";
import Link from "next/link";
import { useState } from "react";
import Post from "../../../components/post";
import TimeLine from "../../../components/timeLine";
import Chat from "../../../components/chat";
import People from "../../../components/people";
import ClassWork from "../../../components/classWork";

function ClassId() {
  const [post, setPost] = useState(false);
  const [cat, setCat] = useState(1);
  return (
    <CLassContianerId post={post} cat={cat}>
      <div className="class-cat">
        <div className="time-line" onClick={(e) => setCat(1)}>
          Time Line
        </div>
        <div className="people" onClick={(e) => setCat(2)}>
          People
        </div>
        <div className="classwork" onClick={(e) => setCat(3)}>
          ClassWork
        </div>
        <div className="chat" onClick={(e) => setCat(4)}>
          Chat
        </div>
      </div>
      {cat == 1 ? (
        <TimeLine setPost={setPost} />
      ) : cat == 2 ? (
        <People />
      ) : cat == 3 ? (
        <ClassWork />
      ) : (
        <Chat />
      )}
    </CLassContianerId>
  );
}

const CLassContianerId = styled.div`
  * {
    transition: 200ms all ease-in-out;
  }
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
    width: 20%;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    .time-line,
    .people,
    .classwork,
    .chat {
      cursor: pointer;
      margin: 1px 0;
      padding: 1.5rem 1rem;
      &:hover {
        background-color: ${colors.main};
        color: ${colors.secondary};
      }
    }
    ${(props) =>
      props.cat == 1
        ? ".time-line"
        : props.cat == 2
        ? ".people"
        : props.cat == 3
        ? ".classwork"
        : ".chat"} {
      background-color: ${colors.main};
      color: ${colors.secondary};
    }
  }
  .class-time-line {
    width: 80%;
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
