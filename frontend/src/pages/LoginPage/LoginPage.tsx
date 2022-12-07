import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  LoginBox,
  LoginButton,
  LoginTheme,
  MyFormControl,
  Title,
} from "./LoginPage.styles";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    console.log("login");
    navigate("/");
  };

  return (
    <LoginTheme>
      <LoginBox>
        <Title>LOGIN</Title>
        <MyFormControl>
          <TextField id="filled-basic" label="Username" variant="filled" />
          <TextField id="filled-basic" label="Password" variant="filled" />
        </MyFormControl>
        <Button onClick={loginHandler} variant="contained" sx={LoginButton}>
          LOGIN
        </Button>
      </LoginBox>
    </LoginTheme>
  );
};

export default LoginPage;
