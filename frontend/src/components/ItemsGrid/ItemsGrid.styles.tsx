import { Box, CardMedia, CardMediaProps, styled } from "@mui/material";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const ItemsWrapper = styled(Box)(
  sx({
    // width: "70rem",
    // height: "auto",
    backgroundColor: theme.white,
    borderRadius: "20px",
  })
);

export const DefaultImage = styled(CropOriginalIcon)(sx({
  width: "100%",
  fontSize: "30vh"
}));

export const CartMediaS = styled(CardMedia)<CardMediaProps>({
  height: '100'
}) as typeof CardMedia;
