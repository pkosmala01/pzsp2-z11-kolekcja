import { Card, CardMedia, CardMediaProps, Box,
  Skeleton as SkeletonMui,
} from "@mui/material";
import sx from "@mui/system/sx";
import { styled } from "@mui/system";

export const CardWrapper = styled(Card)(sx({
  borderRadius: '30px'
}));

export const ImageWrapper = styled(Box)(sx({
  width: "30vh",
  height: "30vh",
}));

export const CartMediaS = styled(CardMedia)<CardMediaProps>({
  height: '100'
}) as typeof CardMedia;

export const Skeleton = styled(SkeletonMui)<CardMediaProps>({
  transform: "none",
}) as typeof SkeletonMui;