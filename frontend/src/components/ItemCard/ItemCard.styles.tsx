import { Card, Box, CardMedia, CardMediaProps } from "@mui/material";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import sx from "@mui/system/sx";
import { styled } from "@mui/system";

export const CardWrapper = styled(Card)(sx({
  borderRadius: '30px'
}));

export const ImageWrapper = styled(Box)(sx({
  width: "30vh",
  height: "30vh",
}));

export const DefaultImage = styled(CropOriginalIcon)(sx({
  width: "100%",
  fontSize: "30vh"
}));

export const CartMediaS = styled(CardMedia)<CardMediaProps>({
}) as typeof CardMedia;