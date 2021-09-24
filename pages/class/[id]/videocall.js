import styled from "styled-components";
import Chat from "../../../components/chat";
import FaceBookChat from "../../../components/facebookChat";
import colors from "../../../utils/colors";

function VideoCall() {
  return (
    <VideoCallContainer>
      <div className="video-holder">
        <div className="screen">
          <div className="cam">
            <div className="controller">
              <i class="fas fa-volume-mute"></i>
            </div>
            <img src="/active.png" />{" "}
          </div>
          <div className="cam"></div>
          <div className="cam"></div>
          <div className="cam"></div>
          <div className="cam"></div>
          <div className="cam"></div>
        </div>
        <div className="video-control">
          <div className="view-options">Video Options</div>
          <div className="mute-call">
            {" "}
            <i class="fas fa-volume-mute"></i>
          </div>
          <div className="no-video-call">
            {" "}
            <i class="fas fa-camera"></i>
          </div>
          <div className="chat-call">
            <i class="fas fa-comments"></i>
          </div>

          <div className="end-call">
            {" "}
            <i class="fas fa-phone"></i>
          </div>
        </div>
      </div>
      <div className="chat-holder">
        <FaceBookChat />
      </div>
    </VideoCallContainer>
  );
}
const VideoCallContainer = styled.div`
  display: flex;
  border-radius: 1rem;

  background-color: white;
  padding: 1rem;
  height: 62rem;
  .chat-holder {
    width: 25%;
    margin-left: 1rem;
  }
  .video-holder {
    flex: 1;

    position: relative;
    overflow: hidden;
    .screen {
      width: 100%;

      height: 100%;
      display: grid;

      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 5px;
      grid-template-rows: 1fr 1fr;

      .cam {
        margin: auto 0;
        height: 100%;
        border: 2px solid rgba(0, 0, 0, 0.2);
        position: relative;
        width: 100%;
        object-fit: cover;
        img {
          width: 100%;
          height: 100%;
        }
        .controller {
          position: absolute;
          width: 10%;
          height: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${colors.main};
          color: white;
        }
      }
    }

    .video-control {
      transition: 300ms all ease-in-out;
      position: absolute;
      bottom: 0;
      display: flex;
      & > div {
        flex: 1;
        border: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        background-color: ${colors.main};
      }
      .mute-call {
        background-color: red;
      }
      .chat-call {
      }
      .no-video-call {
      }
      .end-call {
      }
      left: 50%;
      height: 7rem;
      width: 40%;
      transform: translateX(-50%) translateY(100%);

      .view-options {
        top: 0;
        font-size: 1.3rem;
        width: 50%;
        padding: 0.1rem 0;
        text-align: center;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        position: absolute;
        border-radius: 1rem 1rem 0 0;
      }
      &:hover {
        transform: translateX(-50%) translateY(0);
      }
    }
  }
`;

export default VideoCall;
