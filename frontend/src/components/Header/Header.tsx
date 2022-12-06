import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import * as Styled from './Header.styles'

const Header = ({routes}) => {

    return <Styled.Box>
        <Grid container>
            <Grid item xs={3}>
                <Styled.BoxTypography>
                    <Styled.Typography variant="h3"> Collection</Styled.Typography>
                </Styled.BoxTypography>
            </Grid>
            <Grid item xs={6}>
                <Styled.StackNav>
                    {
                        routes.map((e, i) => {
                            return <Styled.BoxTypography key={i}>
                                <Link to={e.link}>
                                    <Styled.Typography variant="h6">{e.title}</Styled.Typography>
                                </Link>
                            </Styled.BoxTypography>
                        })
                    }
                </Styled.StackNav>
            </Grid>
            <Grid item xs={3}>b</Grid>
        </Grid>
    </Styled.Box>
}

export default Header;