import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import {
    Grid, Typography, Box,
    ListItem as ListItemMui,
    List as ListMui,
    ListItemAvatar as ListItemAvatarMui,
    CircularProgress as CircularProgressMui,
    Paper as PaperMui,
} from "@mui/material";

import theme from "../../styles/theme";

export const GridContainer = styled(Grid)(sx({
    display: "flex",
}));

export const Paper = styled(PaperMui)(sx({
    margin: '1vw',
    padding: '1vh',
    borderRadius: '20px',
    backgroundColor: theme.white,
}));

export const ListItemAvatar = styled(ListItemAvatarMui)(sx({
    paddingRight: { xs: 0, sm : '1vw' },
    height: { xs: "inherit", sm: "100%" },
    width: { xs: "100%", sm: "inherit" },
}));

export const img = styled('img')(sx({
    height: { xs: "inherit", sm: "100%" },
    width: { xs: "100%", sm: "inherit" },
}));

export const List = styled(ListMui)(sx({
    padding: "1vw"
}));

export const ListItem = styled(ListItemMui)(sx({
    width: "auto",
    flexDirection: { xs: "column", sm: "row" },
    height: {xs: "auto", sm: '20vh' },
    margin: { xs: "5vw", sm: '1vh' },
    padding: '2vh',
    borderRadius: '20px',
    backgroundColor: theme.white,
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
    alignItems: "flex-start",
}));

export const TextBlock = styled(Box)(sx({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
    textAlign: { xs: "center", sm: "inherit"},
}));

export const TypographyTitle = styled(Typography)(sx({
    fontSize: '4vh',
    fontWeight: 700,
}));

export const TypographyDesc = styled(Typography)(sx({
    fontSize: '2vh',
    fontWeight: 500,
    maxHeight: "6vh",
    // display: { xs: "none", sm: "inherit" },
}));


export const SpinnerBox = styled(Box)(sx({
    minHeight: "50vh",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
