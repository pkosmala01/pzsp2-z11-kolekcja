import {
  Grid, Box, Typography, Skeleton,
  Paper as PaperMui,
} from "@mui/material";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const GridContainer = styled(Grid)(sx({
  display: "flex",
}));

export const Paper = styled(PaperMui)(sx({
  margin: '1vw',
  padding: '2vh',
  borderRadius: '20px',
  backgroundColor: theme.white,
}));

export const ImageWrapper = styled(Box)(sx({
  width: "100%",
  height: {xs: "30vh", sm: "50vh"},
}));

export const ImageSkeleton = styled(Skeleton )(sx({
  width: "100%",
  height: {xs: "30vh", sm: "50vh"},
  transform: "none"
}));

export const TitleSkeleton = styled(Skeleton)(sx({
  width: "100%",
  transform: "none",
  fontSize: '4vh',
  lineHeight: "1.5",
  maxHeight: "6vh",
}));

export const TextSkeleton = styled(Skeleton)(sx({
  width: "100%",
  transform: "none",
  fontSize: '2vh',
  lineHeight: "1.5",
}));

export const DefaultImage = styled(CropOriginalIcon)(sx({
  width: "100%",
  fontSize: {xs: "30vh", sm: "50vh"},
}));

export const TypographyTitle = styled(Typography)(sx({
  fontSize: '4vh',
  fontWeight: 700,
  maxHeight: "6vh",
}));

export const TypographySubTitle = styled(Typography)(sx({
  fontSize: '2.5vh',
  fontWeight: 600,
  textTransform: "uppercase",
  padding: "inherit"
}));

export const TypographyDesc = styled(Typography)(sx({
  fontSize: '2vh',
  fontWeight: 500,
  maxHeight: "6vh",
}));

