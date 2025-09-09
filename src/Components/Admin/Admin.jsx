import React from "react";
import "./Admin.css";

const Admin = () => {
  return (
    <div id="body">
      <form action="login_admin" method="post">
        <div id="login">
          user: <input type="text" name="user" />
          password: <input type="password" name="password" />
          <input id="login_button" type="submit" value="login" />
        </div>
      </form>
    </div>
  );
};

export default Admin;
