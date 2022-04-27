import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUerAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUerAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empth values).",
      });
      return;
    }
    //input에 입력된 모든값들은 문자열로 출력되기 때문에 숫자로변경
    if (+enteredUerAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    // 입력된 데이터를 App에 보내준다.
    props.onAddUser(enteredName, enteredUerAge);
    // 이렇게 dom 을 조작하기 위해 ref를 사용하는 것은 매우 드물지만, 새로운 요소를 추가하거나 css를 추가하는게 아닌
    // 그냥 input 값 내용만 바꾸는 것으므로 괜찮음..
    // 만약 이렇게 읽기만하고 수정할 계획이 없다면 state를 이요할 필요가 없다.
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // 에러 모달창 클릭시 사라지게 하는 함수
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
