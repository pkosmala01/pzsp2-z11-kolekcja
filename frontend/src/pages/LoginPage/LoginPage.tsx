import { Alert, TextField, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ENDPOINT, URL } from "../../untils/endpoint";
import axios from "axios";
import { useQuery } from "react-query";

import {
  LoginBox,
  LoginButton,
  LoginTheme,
  LoginTypography,
  MyFormControl,
  Title,
  BgBlur,
  CircularProgress,
  blur,
} from "./LoginPage.styles";

const LoginPage = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();

  const loginHandler = async () => {
    const responce = await axios.post(URL + ENDPOINT.login, new URLSearchParams({username, password}),
    {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      },
      withCredentials: true
    });
    return responce.data;

  }

  const {isFetching, isLoading, isError, refetch} = useQuery("", loginHandler,{
    refetchOnWindowFocus: false,
    enabled: false,
    retry: 1,
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data['access_token']);
      navigate("/");
    },

  });

  const onClickHandler = () => {
    refetch();
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <LoginTheme container>
      <Grid item xs={2} sm={3} ></Grid>
      <Grid item xs={8} sm={6} >
        {
        (isFetching || isLoading)  &&
          <BgBlur>
            <CircularProgress></CircularProgress>
          </BgBlur>
        }
        <LoginBox sx={(isFetching || isLoading) ? blur : {}}>
          <Alert id='login-failed' severity="error" style={ isError ? {"display": "flex"} : {"display": "none"}} ><LoginTypography>Login Failed</LoginTypography></Alert>
          <Title>LOGIN</Title>
          <MyFormControl>
            <TextField id="filled-username" onChange={handleUsernameChange} label="Email" variant="filled" required disabled={isFetching || isLoading}/>
            <TextField id="filled-password" onChange={handlePasswordChange} label="Password" variant="filled" required type="password" disabled={isFetching || isLoading}/>
          </MyFormControl>
          <LoginButton onClick={onClickHandler} variant="contained" disabled={isFetching || isLoading}>
            <LoginTypography>LOGIN</LoginTypography>
          </LoginButton>
        </LoginBox>
      </Grid>
      <Grid item xs={2} sm={3}></Grid>
    </LoginTheme>
  );
};

export default LoginPage;
