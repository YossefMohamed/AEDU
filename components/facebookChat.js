
import styled from "styled-components";
import colors from "../utils/colors";

function Chat() {
  return (
    <ChattingContainer>
      <div className="chat_user-details">
        <img src="/user1.png" />
        <div className="user_details">
          {" "}
          <div className="user_name">Yossef Mohamed</div>
          <div className="last-seen"> Today at 12:56</div>
        </div>
      </div>
      <div className="chat-content">
        <div className="message from">Kid, where'd you come from? </div>
        <div className="message to">Field trip! 🤣</div>
        <div className="message to">
          Uh, what is this guy's problem, Mr. from? 🤔
        </div>
        <div className="message from">Kid, where'd you come from? </div>
        <div className="message to">Field trip! 🤣</div>
        <div className="message to">
          Uh, what is this guy's problem, Mr. from? 🤔
        </div>
        <div className="message from">
          Uh, he's from space, he came here to steal a necklace from a wizard.
        </div>
      </div>
      <div className="input">
        <i className="fas fa-camera"></i>
        <i className="far fa-laugh-beam"></i>
        <input placeholder="Type your message here!" type="text" />
        <i className="fas fa-microphone"></i>
      </div>
    </ChattingContainer>
  );
}
const ChattingContainer = styled.div`
    z-index:5;
  .last-seen {
    color: ${colors.secondFont};
  }
  .user_details {
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .input {
		box-sizing: border-box;
		flex-basis: 4rem;
		flex-shrink: 0;
		display: flex;
        
        align-items: center;
        flex: 1;
		padding: 0 0.5rem 0 1.5rem;
		
		i {
			font-size: 1.5rem;
			margin-right: 1rem;
			color: $text-2;
			cursor: pointer;
			transition: color 200ms;
			
			&:hover {
				color: $text-1;
			}
		}
		
		input {
          
            background-color: red;
			border:1px solid rgba(0, 0, 0, 0.2);
            outline: 0;
			background-image:none;
			background-color: white;
			padding: 0.5rem 1rem;
			margin-right: 1rem;
			border-radius: 1.125rem;
			flex-grow: 2;
			box-shadow: 
				0 0 1rem rgba(black, 0.1),
				0rem 1rem 1rem -1rem rgba(black, 0.2);
			
			font-family: Red hat Display, sans-serif;
			font-weight: 400;
			letter-spacing: 0.025em;
			
			&:placeholder {
				color: $text-3;
			}
		}
	}
}

  .message {
    box-sizing: border-box;

    padding: 0.5rem 1rem;
    margin: 1rem;
    background: #fff;
    border-radius: 1.125rem 1.125rem 1.125rem 0;
    min-height: 2.25rem;
    width: fit-content;
    max-width: 66%;

    box-shadow: 0 0 2rem rgba(black, 0.075),
      0rem 1rem 1rem -1rem rgba(black, 0.1);
  }
  .to {
    margin: 1rem 1rem 1rem auto;
    border-radius: 1.125rem 1.125rem 0 1.125rem;
    background: ${colors.main};
    color: white;
  }
  .chat-content {
    overflow: auto;
    height: 72%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .user_name {
    font-size: 1.7rem;
  }
  border-radius: 5px;
  width: 330px;
  height: 450px;
  background-color: white;
  position: fixed;
  top: 100%;
  left: 90%;
  transform: translate(-100%, -100%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  .chat_user-details {
    height: 16%;
    overflow: hidden;
    display: flex;
    padding: 2rem 1.5rem;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    
    & img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      margin-right: 1.5rem;
    }
  }
`;
export default Chat;
