import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

// function Hello() {
//   function byFn() {
//     console.log("bye :(");
//   }
//   function hiFn() {
//     console.log("created :) ");
//     return byFn;
//   }
//   useEffect(hiFn, []);
//   return <h1>Hello</h1>;
// }

function Hello() {
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClickShowing = () => setShowing((prev) => !prev);
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes");
  }, [keyword, counter]);
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search hwew..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"Continue"} /> <br />
      {showing ? <Hello /> : null}
      <button onClick={onClickShowing}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
