import React, { useState } from "react";

import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";
function App() {
  const [userList, setUserList] = useState([]);

  const submitHandler = (username, age) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), name: username, age: age },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={submitHandler} />
      <UserList users={userList} />
      
    </div>
  );
}

export default App;
