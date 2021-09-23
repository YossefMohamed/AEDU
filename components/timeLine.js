import Link from "next/link";
import ImageContainer from "../utils/ImageContainer";
import Post from "./post";

function TimeLine({ setPost }) {
  return (
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
  );
}

export default TimeLine;
