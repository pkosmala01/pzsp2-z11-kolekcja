import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import * as Styled from "./Header.styles";
import { RouteType } from "../../untils/type";

const Header = (props: { routes: RouteType[] }) => {
  return (
    <Styled.Box>
      <Grid container>
        <Grid item xs={3}>
          <Styled.BoxTypography>
            <Styled.Typography variant="h3"> Collection</Styled.Typography>
          </Styled.BoxTypography>
        </Grid>
        <Grid item xs={6}>
          <Styled.StackNav>
            {props.routes.map((e: RouteType, index) => {
              return (
                <Styled.BoxTypography key={index}>
                  <Link to={e.link}>
                    <Styled.Typography variant="h6">
                      {e.title}
                    </Styled.Typography>
                  </Link>
                </Styled.BoxTypography>
              );
            })}
          </Styled.StackNav>
        </Grid>
      </Grid>
    </Styled.Box>
  );
};

export default Header;
