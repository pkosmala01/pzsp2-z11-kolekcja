import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import { Typography, Button, Grid, Box, IconButton } from "@mui/material";
import { Add, Close, HideImage } from '@mui/icons-material';
import theme from "../../styles/theme";
import BtnPrimary from "../BtnPrimary";
import CircularProgress from "../CircularProgress";


export const GridContainer = styled(Grid)(sx({
  margin: "1rem",
  display: "flex",
}));

export const UploadBtnTypography = styled(Typography)(sx({
}))

export const ItemWrapper = styled('div')(sx({
  position: "relative",
  margin: "0.3rem .3rem",
  padding: "0.5rem",
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: 'center',
  flexDirection: "column",
  borderRadius: "10px",
  border: `3px solid ${theme.btn}`,
}))

export const ErrorItemWrapper = styled(ItemWrapper)(sx({
  borderColor: "#d32f2f",
}))

export const UploadButton = styled(BtnPrimary)(sx({
  boxSizing: "content-box",
  margin: "0.3rem .3rem",
  padding: "0.5rem",
  width: "4rem",
  height: "4rem",
  borderRadius: "10px",
  justifyContent: 'center',
  flexDirection: "column",
  border: `3px solid ${theme.btn}`,
})) as typeof Button;

export const AddIcon = styled(Add)(sx({
  fontSize: "2rem",
}))

export const HoverLayout = styled('div')(sx({
  position: "absolute",
  top: "0",
  left: "0",
  width: '100%',
  height: '100%',
  zIndex: 999,
  background: 'rgba(40, 40, 40, 0.5)',
  '&:hover': {
    opacity: "1",
  },
  opacity: "0",
}))

export const DeleteIcon = styled(Close)(sx({
  position: "absolute",
  right: "0",
  top: "0",
  marginRight: "-2px",
  marginTop: "-2px",
  cursor: "pointer"
}))

export const ErrorIcon = styled(HideImage)(sx({
  fontSize: "2rem",
  position: "absolute",
  left: "50%",
  top: "50%",
  marginLeft: "-1rem",
  marginTop: "-1rem",
  cursor: "pointer",
}))

export const ProgressIcon = styled(CircularProgress)(sx({
  fontSize: "2rem",
  position: "absolute",
  left: "50%",
  top: "50%",
  marginLeft: "-20px",
  marginTop: "-20px",
}));

export const SliderContainer = styled(Box)(sx({
  margin: "1rem",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  width: "100%"
}))

export const SliderWrapper = styled(Box)(sx({
  display: "flex",
  position: "relative",
  overflow: "hidden",
  width: "40vw",
}))

export const ImageWrapper = styled('div')(sx({
  position: "relative",
  width: { xs: "40vw", sm: "40vw"},
  height: { xs: "30vh", sm: "65vh"},
  display: "flex",
  flexDirection: "row",
  transition: 'transform 0.6s ease',
}))

export const Image = styled('img')(sx({
  width: "40vw",
  objectFit: "fit",
  position: "relative",
}))

export const SliderButton = styled(IconButton)(sx({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 999,
}))

export const SliderLeftButton = styled(SliderButton)(sx({
  left: 0,
}))

export const SliderRightButton = styled(SliderButton)(sx({
  right: 0,
}))
