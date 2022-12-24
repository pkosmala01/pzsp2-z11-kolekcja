import { Button } from "@mui/material";
import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const BtnPrimary = styled(Button)(sx({
  backgroundColor: theme.btn,
  borderRadius: "30px",
  color: theme.white,
  '&:hover': {
    background: theme.primary,
 },
}));