import sx from "@mui/system/sx";
import { styled } from "@mui/system";
import { Grid, Box } from "@mui/material";
import { BtnPrimary } from "../../components";

export const GridOuterContainer = styled(Grid)(sx({
  justifyContent: "center",
  paddingBottom: "5rem"
}));

export const GridInnerContainer = styled(Grid)(sx({
  justifyContent: "center",
  paddingBottom: "5rem"
}));

export const GridItem = styled(Grid)(sx({
  margin: "1rem",
  paddingBottom: "5rem"
}));

export const UploadButton = styled(BtnPrimary)(sx({
  margin: "1rem",
})) as typeof BtnPrimary;

export const SubmitButtonWrapper = styled(Box)(sx({
  display: "flex",
  margin: "2rem",
  justifyContent: "center",
}));

export const SubmitButton = styled(BtnPrimary)(sx({
  display: "flex",
  padding: "0.5rem",
  height: "3rem",
  width: {sm: "50%"},
}));


