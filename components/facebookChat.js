import styled from "styled-components";
import colors from "../utils/colors";

function FaceBookChat() {
  return (
    <ChattingContainer>
      <div className="chat_user-details">
        <div className="user_details">
          {" "}
          <div className="user_name">Text Chatting</div>
        </div>
      </div>
      <div className="chat-content">
        <div className="message from">
          Kid, where'd you come from? <span>Yossef</span>
        </div>
        <div className="message to">
          Field trip! 🤣<span>Mohamed</span>
        </div>
        <div className="message to">
          Uh, what is this guy's problem, Mr. from? 🤔<span>Mohamed</span>
        </div>
        <div className="message from">
          Kid, where'd you come from?<span>Yossef</span>
        </div>
        <div className="message to">
          Field trip! 🤣<span>Mohamed</span>
        </div>
        <div className="message to">
          Uh, what is this guy's problem, Mr. from? 🤔<span>Mohamed</span>
        </div>
        <div className="message from">
          Kid, where'd you come from?<span>Yossef</span>{" "}
        </div>
        <div className="message to">
          Field trip! 🤣<span>Mohamed</span>
        </div>
        <div className="message to">
          Uh, what is this guy's problem, Mr. from? 🤔<span>Mohamed</span>
        </div>
        <div className="message from">
          Uh, he's from space, he came here to steal a necklace from a wizard.
          <span>Yossef</span>
        </div>
      </div>
      <div className="input">
        <input placeholder="Type your message here!" type="text" />
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
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
		display: flex;
        
        align-items: center;
        height: 8%;
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
			border-radius: 0.5rem;
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

    padding: 0.5rem 1rem 0.5rem;
    margin-top: 3rem!important;
    margin-bottom: 1rem!important;
    background: #fff;
    border-radius: 1.125rem 1.125rem 1.125rem 0;
    min-height: 2.25rem;
    width: fit-content;
    max-width:63%;
    position: relative;
    box-shadow: 0 0 2rem rgba(black, 0.075),
      0rem 1rem 1rem -1rem rgba(black, 0.1);
      span{
        position: absolute;
        font-size: 1.4rem;
        top: 0;
        transform: translateY(-100%);
        color: black;
        left: 8px;
      }
     
  }
  .to {
    margin: 1rem 1rem 1rem auto;
    border-radius: 1.125rem 1.125rem 0 1.125rem;
    background: ${colors.main};
    color: white;
  }
  .from{
    margin-left: 1rem;
  }

  .chat-content {
    overflow: auto;flex:1;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .user_name {
    font-size: 1.7rem;
  }
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  .chat_user-details {
    height: 8%;
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
export default FaceBookChat;
