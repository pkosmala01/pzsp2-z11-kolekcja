import { FormControl } from "@mui/material";
import { Box, styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const LoginTheme = styled(Box)(
  sx({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.loginBg,
    height: "100vh",
    margin: 0,
  })
);

export const LoginBox = styled(Box)(
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.white,
    height: "40vh",
    width: "50vw",
    borderRadius: "30px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
  })
);

export const LoginButton = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.primary,
  height: "6vh",
  width: "8vw",
  borderRadius: "30px",
  color: theme.white,
};

export const MyFormControl = styled(FormControl)(
  sx({
    width: "50vh",
    margin: "1rem",
  })
);

export const Title = styled("h1")(
  sx({
    color: theme.black,
  })
);