import { FormControl, Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const LoginTheme = styled(Grid)(
  sx({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.bgBlue,
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
    padding: "1rem",
    borderRadius: "30px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
  })
);

export const LoginButton = styled(Button)(sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary,
    height: "6vh",
    width: { xs: "20vw", sm: "8vw"},
    borderRadius: "30px",
    color: theme.white,
}));

export const MyFormControl = styled(FormControl)(
  sx({
    width: "100%",
    maxWidth: "50vh",
    margin: "1rem",
  })
);

export const Title = styled("h1")(
  sx({
    color: theme.black,
  })
);

export const LoginTypography = styled(Typography)(sx({
  fontSize: { xs: '1.5vh', sm: "1vw" },
  fontWeight: 500,
}));
