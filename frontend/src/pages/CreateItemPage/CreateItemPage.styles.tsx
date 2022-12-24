import sx from "@mui/system/sx";
import { styled } from "@mui/system";
import BtnPrimary from "../../components/BtnPrimary/BtnPrimary";

// create xs custom for mui components
export const Button = styled(BtnPrimary)(sx({
  display: "flex",
  margin: "1rem 0",
  padding: "0.5rem",
  height: "3rem",
  width: {sm: "100%"},
}));
