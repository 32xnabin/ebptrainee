import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModule";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return setError(true);
    }
    if (+age < 1) {
      return setError(true);
    }
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title="An error has occured!"
          message="something went wrong"
          onOk={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username"> Username</label>
          <input id="username" type="text" onChange={usernameHandler} />
          <label htmlFor="age"> Age (Years)</label>
          <input id="age" type="number" onChange={ageHandler} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
