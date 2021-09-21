import styled from "styled-components";
import colors from "../utils/colors";
import Link from "next/link";
function SignUp() {
  return (
    <SignUpContainer>
      <div className="login_logo">
        <span>AEDU</span>
        <span className="login-slug">
          <div className="login-slug_div">Sign Up to our AEDU Team</div>
          <div className="hrTag"></div>
        </span>
      </div>

      <form>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email.."
          className="login_email"
        />
        <label>Age</label>
        <input
          type="date"
          placeholder="Enter Your Email.."
          className="login_email"
        />
        <label>Gender</label>
        <select class="select">
          <option value="value1">Male</option>
          <option value="value1">Female</option>
        </select>
        <label>Password</label>
        <input
          type="Password"
          placeholder="Enter Your Password.."
          className="login_email"
        />
        <label>Confirm Password</label>
        <input
          type="Password"
          placeholder="Confirm Your Password.."
          className="login_email"
        />

        <button>Sign Up</button>
      </form>
    </SignUpContainer>
  );
}
const SignUpContainer = styled.div`
  & {
    & select {
      border: 0;
      padding: 1rem 0rem;
      border-bottom: 1px solid black;
      outline: 0;
      & option {
        border: 0;
        padding: 1rem 0rem;
      }
    }
  }
  & form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
    input {
      padding: 1rem 0rem;
      outline: 0;
      border: 0;
      border-bottom: 1px solid black;
      border-radius: 0;
    }
    & .login_email {
      margin-bottom: 2rem;
    }
    .forget_password {
      margin: 1rem 0;
      text-align: right;
    }
    & button {
      margin-top: 3.2rem;
      border: 0;
      outline: 0;
      padding: 1.5rem 0;
      border-radius: 5px;
      color: white;
      background-color: ${colors.button};
      font-size: 1.5rem;
    }
  }
  width: 50%;
  padding: 3rem;
  margin: auto;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  .login_logo {
    & span {
      font-family: sofia;
      font-size: 3.5rem;
      display: block;
      text-align: center;
    }
    .login-slug {
      font-family: inherit;
      .login-slug_div {
        background-color: white;
        z-index: 8;
        width: fit-content;
        z-index: 10 !important;
        margin: auto;
        position: relative;
        padding: 0 1rem;
      }
      position: relative;
      margin: 2.5rem 0;
      font-size: 1.2rem;
      & .hrTag {
        z-index: 0 !important;
        background-color: black;
        border-color: black;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
        width: 100%;
        background-color: black;
        height: 1px;
        border-width: 5px;
      }
    }
  }
`;
export default SignUp;
