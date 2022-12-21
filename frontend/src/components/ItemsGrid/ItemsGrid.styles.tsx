import { Box, styled } from "@mui/material";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const ItemsWrapper = styled(Box)(
  sx({
    // width: "70rem",
    // height: "auto",
    backgroundColor: theme.white,
    borderRadius: "20px",
  })
);
