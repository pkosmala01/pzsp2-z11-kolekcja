import { Box, Button, FormControl,
  CircularProgress as CircularProgressMui,
} from "@mui/material";
import { styled } from "@mui/system";
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

export const SubmitButton = styled(Button)(sx({
  marginTop: "1.25rem",
  backgroundColor: theme.btn,
  height: "5vh",
  width: { xs: "25vw", sm: "6vw"},
  borderRadius: "30px",
  color: theme.white,
  '&:hover': {
    background: theme.primary,
 },
}));

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
  filter: "blur(1px)"
})

export const CircularProgress = styled(CircularProgressMui)(sx({
  color: theme.primary,
}));

export const CreateBtnWrapper = styled(Box)(sx({
  display: { xs: "none", sm: "flex" },
  flexDirection: "column-reverse",
  alignItems: "flex-end",
  justifyContent: "right",
  marginTop: { xs: "0.5rem", sm: "2rem" },
  marginRight: { xs: "0.5rem", sm: "1.5rem" },
}))

export const CreateCollectionBtn = styled(Button)(sx({
  display: "flex",
  backgroundColor: theme.btn,
  padding: "1rem",
  borderRadius: "30px",
  color: theme.white,
  '&:hover': {
      background: theme.primary,
      // background: theme.bgGrey,
      // border: `3px ${theme.primary} solid`,
      // fontWeight: 700,
      // color: theme.primary,
   },
}));

export const CreateCollectionFab = styled(Box)(sx({
  display: { xs: "flex", sm: "none" },
  backgroundColor: theme.primary,
  padding: "1rem",
  borderRadius: "30px",
  color: theme.white,
  '&:hover': {
      background: theme.btn,
      // background: theme.bgGrey,
      // border: `3px ${theme.primary} solid`,
      // fontWeight: 700,
      // color: theme.primary,
  },
  position: "fixed",
  right: "15vw",
  bottom: "7vh",
  zIndex: 999,
}))
