import { useState } from "react";

import { Alert, TextField, Grid } from "@mui/material";
import {
  LoginBox,
  LoginButton,
  LoginTheme,
  LoginTypography,
  MyFormControl,
  Title,
  BgBlur,
  blur,
} from "./LoginPage.styles";
import { CircularProgress } from "../../components";
import { useLogin } from "../../hook";

const LoginPage = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const {mutate, isLoading, isError} = useLogin(username, password);

  return (
    <LoginTheme container>
      <Grid item xs={2} sm={3} ></Grid>
      <Grid item xs={8} sm={6} >
        {isLoading &&
          <BgBlur>
            <CircularProgress/>
          </BgBlur>
        }
        <LoginBox sx={isLoading ? blur : {}}>
          {isError &&
            <Alert severity="error">
              <LoginTypography>Login Failed</LoginTypography>
            </Alert>
          }
          <Title>LOGIN</Title>
          <MyFormControl>
            <TextField id="filled-username" onChange={(e: any) => setUsername(e.target.value)} label="Email" variant="filled" required disabled={isLoading}/>
            <TextField id="filled-password" onChange={(e: any) => setPassword(e.target.value)} label="Password" variant="filled" required type="password" disabled={isLoading}/>
          </MyFormControl>
          <LoginButton onClick={() => mutate()} variant="contained" disabled={isLoading}>
            <LoginTypography>LOGIN</LoginTypography>
          </LoginButton>
        </LoginBox>
      </Grid>
      <Grid item xs={2} sm={3}></Grid>
    </LoginTheme>
  );
};

export default LoginPage;
