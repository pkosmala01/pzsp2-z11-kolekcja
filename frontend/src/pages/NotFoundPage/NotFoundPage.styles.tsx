import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import sx from "@mui/system/sx";


export const Wrapper = styled(Box)(
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  })
);

export const LinkWrapper = styled(Link)(
  sx({
    marginLeft: { sm: "2vw" },
    height: { xs: "60%", sm: "50%" },
    width: { xs: "55%", sm: "inherit" },
  })
);

export const TitleTypography = styled(Typography)(sx({
  fontSize: { xs: '5vh', sm: "3vw" },
  fontWeight: 700,
}));