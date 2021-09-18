import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import React from "react";

export default function NotFound() {
  const dispatch = useDispatch();
  const counter = useSelector((s) => s.counter);
  React.useEffect(() => {
    console.log(counter);
  }, [counter]);
  return (
    <div
      onClick={(e) => {
        dispatch({
          type: "INC",
        });
      }}
    >
      <h1> Page Not Found {counter.counter} </h1>
      <Link href="/">
        <a>GO Back </a>
      </Link>
    </div>
  );
}
