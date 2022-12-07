import { FormControl, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const CollectionWrapper = styled(Box)(
  sx({
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // height: "10vh",
    // width: "40vw",
    margin: "1vw",
    padding: "2vh",
    backgroundColor: theme.white,
    borderRadius: "20px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
  })
);

export const MyFormControl = styled(FormControl)(
  sx({
    width: "30vh",
    margin: "1rem",
  })
);

export const ButtonTypography = styled(Box)(
  sx({
    fontSize: "1vw",
    fontWeight: 500,
  })
);

export const CreateBannerTypography = styled(Box)(
  sx({
    fontSize: "2vw",
    fontWeight: 500,
    margin: "1rem",
  })
);

export const SubmitButton = {
  marginTop: "1.25rem",
  innerWidth: "10vw",
};
