import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import BtnSecondary from "../BtnSecondary/BtnSecondary";
import {
    Grid,
    Box as BoxMui,
    Typography as TypographyMui,
} from "@mui/material";

import theme from "../../styles/theme";

export const GridContainer = styled(Grid)(sx({
    margin: 0,
    backgroundColor: theme.primary,
    height: "9vh",
}));

export const LogoWrapper = styled(Grid)(sx({
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}));

export const NavWrapper = styled(Grid)(sx({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}));

export const LoginWrapper = styled(Grid)(sx({
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    textAlign: 'center'
}));

export const Typography = styled(TypographyMui)(sx({
    color: theme.fontLight,
}));

export const BoxTypography = styled(BoxMui)(sx({
    paddingLeft: '2vw',
}));

export const Button = styled(BtnSecondary)(sx({
    width: '7vw',
    height: '5vh',
    marginRight: '2vw',
}));

export const LoginTypography = styled(TypographyMui)(sx({
    fontSize: { xs: '1.5vh', sm: "1vw" },
    fontWeight: 500,
}));
