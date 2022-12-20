import { Link } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
import * as Styled from "./Header.styles";
import { RouteType } from "../../untils/type";
import isLogged from "../../untils/isLogged";

const Header = (props: { routes: RouteType[] }) => {
  return (
    <Styled.GridContainer container>
        <Styled.LogoWrapper item xs={3}>
            <Link to='/'>
                <Styled.Typography variant="h3"> App</Styled.Typography>
            </Link>
        </Styled.LogoWrapper>
        <Styled.NavWrapper item xs={6}>
        </Styled.NavWrapper>
        <Styled.LoginWrapper item xs={3}>
            {isLogged()
            ?
            <Link to={'/login'} onClick={() => {localStorage.removeItem("aceessToken")}}>
                <Styled.Button>
                    <Styled.LoginTypography>LOGOUT</Styled.LoginTypography>
                </Styled.Button>
            </Link>

            :
            <Link to={'/login'}>
                <Styled.Button>
                    <Styled.LoginTypography>LOGIN</Styled.LoginTypography>
                </Styled.Button>
            </Link>
            }

        </Styled.LoginWrapper>
     </Styled.GridContainer>
  );
};

export default Header;
