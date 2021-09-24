import styled from "styled-components";
import colors from "../utils/colors";

function Chat() {
  return (
    <ChattingContainer>
      <div className="chat-people">
        <div className="title">Messages</div>
        <div className="chat-people--container">
          <div className="chat-item">
            <img src="/create.png" />
            <div className="user_name">Yossef Mohamed</div>
          </div>
        </div>
      </div>
      <div className="messages-container">
        <div className="title">Yossef Mohamed</div>
        <div className="messages">
          <div className="message me">
            <div className="to">
              {" "}
              Yossef Mohamssef Mohamssef Mohamssef Mohamssef Mohamed
            </div>
          </div>
          <div className="message me">
            <div className="to"> Hey? </div>
          </div>
          <div className="message him">
            <div className="to"> Fine!! </div>
          </div>
          <div className="message him">
            <div className="to"> And You? </div>
          </div>
        </div>
        <div id="chatBoxSend">
          <span id="smile">
            <i class="fa fa-smile" aria-hidden="true"></i>
          </span>
          <input placeholder="Message..." type="text" id="msgBoxSend" />
          <span id="sendMsg">
            <i class="fa fa-paper-plane" aria-idden="true"></i>
          </span>
        </div>
      </div>
    </ChattingContainer>
  );
}
const ChattingContainer = styled.div`
  height: 55rem;
  display: flex;
  margin-left: 3rem;
  background-color: white;
  box-sizing: border-box;
  #chatBoxSend {
    flex-grow: 1;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #smile,
    #sendMsg {
      width: 5%;
      text-align: center;
      font-size: 2.2rem;
    }
    input {
      padding: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.2);

      width: 90%;
      border-radius: 10px;
      outline: 0;
    }
  }
  width: 80%;
  .chat-people--container {
    overflow: auto;
    padding: 1rem 0 1rem 0rem;
    display: flex;
    flex-direction: column;
    .chat-item {
      min-height: 6.5rem;
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      padding: 1rem;
      &:hover {
        background-color: ${colors.main};
        color: white;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .user_name {
        margin-left: 2rem;
      }
    }
  }

  .chat-people {
    width: 30%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.2);

    & .title {
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 1rem 0 1rem 1rem;
      font-size: 1.75rem;
      height: 5rem;
      /* display: flex;
      align-items: center; */
    }
  }
  .messages-container {
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    .messages {
      padding: 1rem 1rem 1rem 1rem;

      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      height: 80%;
      .message {
        min-height: 4rem;
        width: fit-content;
        width: 100%;
        box-sizing: border-box;
        margin: 1rem 0;
        display: flex;
      }

      .me {
        justify-content: flex-end;
        .to,
        .from {
          width: fit-content;
          color: white;
          background-color: ${colors.main};
          padding: 1.5rem;
          border-radius: 15px 0 15px 15px;
        }
      }
      .him {
        justify-content: flex-start;
        .to,
        .from {
          width: fit-content;
          color: white;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 1.5rem;
          border-radius: 0 15px 15px 15px;
        }
      }
    }
    .title {
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 1rem 0 1rem 1rem;
      font-size: 1.75rem;
      height: 5rem;
    }

    flex: 1;
  }
`;
export default Chat;
//#58b666
