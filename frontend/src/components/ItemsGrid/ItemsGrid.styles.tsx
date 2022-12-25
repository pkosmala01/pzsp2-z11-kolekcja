import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import sx from "@mui/system/sx";

export const GridContainer = styled(Grid)(sx({
  justifyContent: {xs: "center", sm: 'flex-end'},
  marginBottom: "5vh",
}));