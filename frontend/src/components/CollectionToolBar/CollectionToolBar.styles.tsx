import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import BtnPrimary from "../BtnPrimary";


export const GridContainer = styled(Grid)(sx({
  justifyContent: "right",
  margin: "2vh 0",
}));

export const Button = styled(BtnPrimary)(sx({
  display: "flex",
  margin: "1rem 0",
  padding: "0.5rem",
  height: "3rem",
  width: {sm: "100%"},
}));

export const ActionBox = styled(Box)(sx({
  display: {xs: "none", sm: "block"},
}));

export const AddItemIcon = styled(AddIcon)(sx({
  display: {xs: "block", sm: "none"},
  fontSize: "large",
}));

export const ManageUsersIcon = styled(ManageAccountsIcon)(sx({
  display: {xs: "block", sm: "none"},
  fontSize: "large",
}));

