import { FormControl, CircularProgress as CircularProgressMui } from "@mui/material";
import { Box, styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const CollectionWrapper = styled(Box)(
  sx({
    margin: "1vw",
    padding: "2vh",
    backgroundColor: theme.white,
    borderRadius: "20px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
    position: "relative",
  })
);

export const MyFormControl = styled(FormControl)(
  sx({
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
    fontSize: { xs: "3vh", sm: "2vw" },
    fontWeight: 500,
    margin: "1rem",
  })
);

export const SubmitButton = {
  marginTop: "1.25rem",
  innerWidth: "10vw",
};

export const BgBlur = styled(Box)(sx({
  width: "inherit",
  height: "inherit",
  position: "absolute",
  zIndex: 999,
  top: "50%",
  left: "50%",
  marginLeft: "-20px",
  marginTop: "-20px",
}));

export const blur = sx({
  filter: "blur(2px)"
})

export const CircularProgress = styled(CircularProgressMui)(sx({
  color: theme.primary,
}));