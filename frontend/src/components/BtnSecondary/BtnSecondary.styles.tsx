import { Button } from "@mui/material";
import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const BtnSecondary = styled(Button)(sx({
  backgroundColor: theme.btn,
  color: theme.fontLight,
  borderRadius: "30px",
  '&:hover': {
    background: theme.bgGrey,
    color: theme.fontDark,
 },
}));