import styled from "styled-components";
import colors from "../utils/colors";
import ImageContainer from "../utils/ImageContainer";

function Post() {
  //1170
  return (
    <PostContainer>
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        />
        <div className="container bootstrap snippets bootdey">
          <div className="">
            <div className="panel panel-white post panel-shadow">
              <div className="post-heading">
                <div className="pull-left image">
                  <img
                    src="https://bootdey.com/img/Content/user_1.jpg"
                    className="img-circle avatar"
                    alt="user profile image"
                  />
                </div>
                <div className="pull-left meta">
                  <div className="title h5">
                    <a href="#">
                      <b>Ryan Haywood</b>
                    </a>
                  </div>
                  <h6 className="text-muted time">1 minute ago</h6>
                </div>
              </div>
              <div className="post-description">
                <p>
                  Bootdey is a gallery of free snippets resources templates and
                  utilities for bootstrap css hmtl js framework.
                  <div className="file-container">
                    <div className="file-row">
                      <div className="file">
                        <i class="fas fa-file"></i>
                      </div>
                      <div className="file-details">SVM.dox</div>
                    </div>
                  </div>
                </p>
                <div className="stats">
                  <a href="#" className="btn btn-default stat-item">
                    <i className="fa fa-thumbs-up icon icon-post" />2
                  </a>
                  <a href="#" className="btn btn-default stat-item">
                    <i class="fas fa-comment icon-post"></i>
                    12
                  </a>
                </div>
              </div>
              <div className="post-footer">
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Add a comment"
                    type="text"
                  />
                  <span className="input-group-addon">
                    <a href="#">
                      <i className="fa fa-edit" />
                    </a>
                  </span>
                </div>
                <ul className="comments-list">
                  <li className="comment">
                    <a className="pull-left" href="#">
                      <img
                        className="avatar"
                        src="https://bootdey.com/img/Content/user_1.jpg"
                        alt="avatar"
                      />
                    </a>
                    <div className="comment-body">
                      <div className="comment-heading">
                        <h4 className="user">Gavino Free</h4>
                        <h5 className="time">5 minutes ago</h5>
                      </div>
                      <p>Sure, ooooooooooooooOk, cohhhhhh</p>
                    </div>
                    <ul className="comments-list">
                      <li className="comment">
                        <a className="pull-left" href="#">
                          <img
                            className="avatar"
                            src="https://bootdey.com/img/Content/user_3.jpg"
                            alt="avatar"
                          />
                        </a>
                        <div className="comment-body">
                          <div className="comment-heading">
                            <h4 className="user">Ryan Haywood</h4>
                            <h5 className="time">3 minutes ago</h5>
                          </div>
                          <p>Relax Ok, coend</p>
                        </div>
                      </li>
                      <li className="comment">
                        <a className="pull-left" href="#">
                          <img
                            className="avatar"
                            src="https://bootdey.com/img/Content/user_2.jpg"
                            alt="avatar"
                          />
                        </a>
                        <div className="comment-body">
                          <div className="comment-heading">
                            <h4 className="user">Gavino Free</h4>
                            <h5 className="time">3 minutes ago</h5>
                          </div>
                          <p>Ok, coOk, cool.</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PostContainer>
  );
}
const PostContainer = styled.div`
  .stat-item {
    margin-right: 2rem;
  }
  .icon-post {
    margin-right: 1rem;
  }
  p .file-container {
    display: flex;
    flex-direction: column;
    .file-row {
      display: flex;
      align-items: center;
      border-radius: 10px;
      overflow: hidden;
      margin: 1.5rem 0;
      height: fit-content;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .file-details {
      padding-left: 4rem;
    }
    .file {
      padding: 1.5rem 2.5rem;
      font-size: 3rem;
      display: flex;
      width: fit-content;
      background-color: rgba(0, 0, 0, 0.2);

      color: ${colors.main};
    }
  }
  & .container {
    width: 100%;
    padding: 0;
  }
  margin: 2rem 0;
  .panel-shadow {
  }
  .panel-white {
    border: 1px solid #dddddd;
  }
  .panel-white .panel-heading {
    color: #333;
    background-color: #fff;
    border-color: #ddd;
  }
  .panel-white .panel-footer {
    background-color: #fff;
    border-color: #ddd;
  }

  .post .post-heading {
    height: 95px;
    padding: 20px 15px;
  }
  .post .post-heading .avatar {
    width: 60px;
    height: 60px;
    display: block;
    margin-right: 15px;
  }
  .post .post-heading .meta .title {
    margin-bottom: 0;
  }
  .post .post-heading .meta .title a {
    color: black;
  }
  .post .post-heading .meta .title a:hover {
    color: #aaaaaa;
  }
  .post .post-heading .meta .time {
    margin-top: 8px;
    color: #999;
  }
  .post .post-image .image {
    width: 100%;
    height: auto;
  }

  .post .post-description {
    padding: 15px;
  }
  .post .post-description p {
    font-size: 14px;
  }
  .post .post-description .stats {
    margin-top: 20px;
  }
  .post .post-description .stats .stat-item {
    display: inline-block;
    margin-right: 15px;
  }
  .post .post-description .stats .stat-item .icon {
    margin-right: 8px;
  }
  .post .post-footer {
    border-top: 1px solid #ddd;
    padding: 15px;
  }
  .post .post-footer .input-group-addon a {
    color: #454545;
  }
  .post .post-footer .comments-list {
    padding: 0;
    margin-top: 20px;
    list-style-type: none;
  }
  .post .post-footer .comments-list .comment {
    display: block;
    width: 100%;
    margin: 20px 0;
  }
  .post .post-footer .comments-list .comment .avatar {
    width: 35px;
    height: 35px;
  }
  .post .post-footer .comments-list .comment .comment-heading {
    display: block;
    width: 100%;
  }
  .post .post-footer .comments-list .comment .comment-heading .user {
    font-size: 14px;
    font-weight: bold;
    display: inline;
    margin-top: 0;
    margin-right: 10px;
  }
  .post .post-footer .comments-list .comment .comment-heading .time {
    font-size: 12px;
    color: #aaa;
    margin-top: 0;
    display: inline;
  }
  .post .post-footer .comments-list .comment .comment-body {
    margin-left: 50px;
  }
  .post .post-footer .comments-list .comment > .comments-list {
    margin-left: 50px;
  }
  .form-control {
    outline: none;
    box-shadow: none;
  }
`;
export default Post;
