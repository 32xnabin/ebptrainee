import React from "react";

import classes from "./User.module.css";

import Card from "@mui/material/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
