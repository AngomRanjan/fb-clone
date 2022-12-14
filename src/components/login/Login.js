import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { setUserAction } from "../../redux/authReducer";
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
    const signIn = () => {
      dispatch(setUserAction());
    }

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In With Google
      </Button>
    </div>
  );
}

export default Login;
