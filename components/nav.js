import styles from "./../styles/Nav.module.css";
import styled from "styled-components";
import colors from "../utils/colors";
import { useState } from "react";
import Link from "next/link";
export default function Nav() {
  const [list, setList] = useState(false);
  return (
    <NavBar display={list}>
      <div className="logo">AEDU</div>
      <div className="bars" onClick={(e) => setList(!list)}>
        <i class="fas fa-bars"></i>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Join A Class</Link>
          </li>
          <li>
            <Link href="">Make A Class</Link>
          </li>
          <li>
            <Link href="">Sign in</Link>
          </li>
          <li className="signup-li">
            <Link href="">Sign up</Link>
          </li>
        </ul>
      </div>
    </NavBar>
  );
}

const NavBar = styled.div`
  position: relative;
  .bars {
    display: none;
    font-size: 2.5rem;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    .bars {
      display: block;
    }
    .nav-list {
      position: absolute;
      top: 100%;
      display: ${(props) => (props.display ? "block" : "none")};
      left: 0;
      width: 100%;
      background-color: ${colors.main};

      ul {
        flex-direction: column;
        width: 100%;
        margin-bottom: 0 !important;

        li {
          width: 100%;
          padding: 2rem 2rem;
        }
      }
    }
  }
  box-shadow: 0 10px 20px -2px rgba(0, 0, 0, 0.2);
  position: sticky;
  z-index: 99;
  top: 0;
  background-color: ${colors.main};
  color: ${colors.secondary};
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  .logo {
    font-family: Sofia, sans-serif;
    width: fit-content;
    font-size: 2.5rem;
    font-weight: bold;
  }
  .nav-list {
    flex-grow: 1;
  }
  ul {
    justify-content: end;
    align-items: center;
    display: flex;
    flex-grow: 1;
    li {
      transition: all 200ms ease-in-out;
      &:hover {
        color: black;
      }
      list-style: none;
      margin: 0 20px;
    }
  }
  .signup-li {
    background-color: ${colors.button};
    padding: 10px;
    border-radius: 5px;
  }
  padding: 10px 20px;
`;
