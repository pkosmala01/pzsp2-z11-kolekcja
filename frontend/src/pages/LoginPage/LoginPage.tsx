import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LoginBox,
  LoginButton,
  LoginTheme,
  LoginTypography,
  MyFormControl,
  Title,
} from "./LoginPage.styles";

const LoginPage = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();

  const loginHandler = () => {
    console.log("login");
    console.log(username);
    console.log(password);
    navigate(-1);
  };

  const handleUsernameChange = (e: any) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <LoginTheme>
      <LoginBox>
        <Title>LOGIN</Title>
        <MyFormControl>
          <TextField id="filled-username" onChange={handleUsernameChange} label="Username" variant="filled" required/>
          <TextField id="filled-password" onChange={handlePasswordChange} label="Password" variant="filled" required type="password"/>
        </MyFormControl>
        <Button onClick={loginHandler} variant="contained" sx={LoginButton}>
          <LoginTypography>LOGIN</LoginTypography>
        </Button>
      </LoginBox>
    </LoginTheme>
  );
};

export default LoginPage;
