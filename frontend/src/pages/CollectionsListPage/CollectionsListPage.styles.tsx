import { padding, styled } from "@mui/system";
import {
    Grid, Typography, Box,
    ListItem as ListItemMui,
    List as ListMui,
    ListItemAvatar as ListItemAvatarMui,
} from "@mui/material";

import theme from "../../styles/theme";

export const GridContainer = styled(Grid)(() => ({
}));

export const Wrapper = styled(Box)(() => ({
    margin: '1vw',
    padding: '1vh',
    borderRadius: '20px',
    backgroundColor: theme.white,
}));

export const ListItemAvatar = styled(ListItemAvatarMui)(() => ({
    height: 'inherit',
    paddingRight: '1vw',
}));

export const img = styled('img')(() => ({
    height: 'inherit',
    width: 'inherit',
    objectFit: 'contain'
}));

export const List = styled(ListMui)(() => ({
}));

export const ListItem = styled(ListItemMui)(() => ({
    alignItems: "flex-start",
    height: '15vh',
    margin: 0,
}));

export const TextBlock = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    width: '100%',
}));

export const TypographyTitle = styled(Typography)(() => ({
    fontSize: '4vh',
    fontWeight: 600,
    // textAlign: 'center',
}));

export const TypographyDesc = styled(Typography)(() => ({
    fontSize: '2vh',
    fontWeight: 700,
    // textAlign: 'center',
}));

