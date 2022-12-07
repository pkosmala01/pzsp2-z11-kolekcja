import { styled } from "@mui/system";
import {
    Grid,
    Box as BoxMui,
    Stack as StackMui,
    Typography as TypographyMui,
    Paper as PaperMui,
    Button as ButtonMui
} from "@mui/material";

import theme from "../../styles/theme";

export const GridContainer = styled(Grid)(() => ({
    margin: 0,
    backgroundColor: theme.primary,
    height: "9vh",
}));

export const LogoWrapper = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}));

export const NavWrapper = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}));

export const LoginWrapper = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    textAlign: 'center'
}));

export const Typography = styled(TypographyMui)(() => ({
    color: theme.fontLight,
}));

export const BoxTypography = styled(BoxMui)(() => ({
    paddingLeft: '2vw',
}));

export const Button = styled(ButtonMui)(() => ({
    width: '7vw',
    height: '5vh',
    marginRight: '2vw',
    backgroundColor: theme.btn,
    color: theme.fontLight,
    borderRadius: "30px",
    '&:hover': {
        background: theme.bgGrey,
        color: theme.fontDark
     },
}));

export const LoginTypography = styled(TypographyMui)(() => ({
    fontSize: '1vw',
    fontWeight: 500,
}));
