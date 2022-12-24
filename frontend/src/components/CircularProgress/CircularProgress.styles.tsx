import {
  CircularProgress as CircularProgressMui
} from "@mui/material";
import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const CircularProgress = styled(CircularProgressMui)(sx({
  color: theme.primary,
}));