import { Card, CardMedia, CardMediaProps, Box,
  Skeleton as SkeletonMui,
} from "@mui/material";
import sx from "@mui/system/sx";
import { styled } from "@mui/system";

export const CardWrapper = styled(Card)(sx({
  borderRadius: '30px'
}));

export const ImageWrapper = styled(Box)(sx({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  width: "25vh",
  height: "25vh",
}));

export const CartMediaS = styled(CardMedia)<CardMediaProps>({
  height: '100'
}) as typeof CardMedia;

export const Skeleton = styled(SkeletonMui)<CardMediaProps>({
  transform: "none",
}) as typeof SkeletonMui;