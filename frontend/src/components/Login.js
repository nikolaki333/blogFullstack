import React from "react";
import { loginUser } from "../reducers/userReducer";
import { useDispatch } from "react-redux";
import { newNotification } from "../reducers/messageReducer";
import { useField } from "../hooks";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, resetUsername] = useField("text");
  const [password, resetPassword] = useField("password");

  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = {
        username: username.value,
        password: password.value,
      };
      dispatch(loginUser(user));

      resetPassword();
      resetUsername();
      const success = {
        success: "Successful Login",
      };
      dispatch(newNotification(success));
      history.push("/blogs");
    } catch (err) {
      const error = {
        error: "Login Failed",
        err: err,
      };
      dispatch(newNotification(error));
    }
  };

  return (
    <>
      <form className="loginform" onSubmit={handleLogin}>
        <div className="formelement">
          <label>Username</label>
          <br />
          <input
            placeholder="Enter Username"
            {...username}
            id="username"
            name="Username"
          />
        </div>
        <div className="formelement">
          <label>Password</label>
          <br />

          <input
            placeholder="Enter Password"
            id="password"
            name="Password"
            {...password}
          />
        </div>
        <button className="importantButton" type="submit">
          login
        </button>
      </form>
    </>
  );
};



export default Login;
