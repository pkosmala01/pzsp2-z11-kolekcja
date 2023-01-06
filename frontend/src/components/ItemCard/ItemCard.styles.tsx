import {
  Card, Box, CardMedia, CardMediaProps,
  Skeleton as SkeletonMui,
  IconButton
} from "@mui/material";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import sx from "@mui/system/sx";
import { styled } from "@mui/system";

export const CardWrapper = styled(Card)(sx({
  borderRadius: '30px',
}));

export const ImageWrapper = styled(Box)(sx({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  width: "25vh",
  height: "25vh",
}));

export const DefaultImage = styled(CropOriginalIcon)(sx({
  width: "100%",
  fontSize: "30vh"
}));

export const Image = styled('img')(sx({
  width: "100%",
}));

export const CartMediaS = styled(CardMedia)<CardMediaProps>({
}) as typeof CardMedia;

export const Skeleton = styled(SkeletonMui)<CardMediaProps>({
  transform: "none",
}) as typeof SkeletonMui;

export const IconButtonn = styled(IconButton)(sx({
    float: "right",
    marginRight: "1rem"
}));