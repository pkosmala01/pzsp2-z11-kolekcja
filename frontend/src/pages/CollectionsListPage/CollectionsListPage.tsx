import { Link } from "react-router-dom";
import { Grid, Box, Divider, ListItemText} from "@mui/material";
import * as Styled from "./CollectionsListPage.styles";

const CollectionsListPage = () => {
  const collections = [
    {
        id: 1,
        name: 'col1',
        description: 'long text'
    },
    {
        id: 1,
        name: 'col2',
        description: 'long text'
    }
  ]
//   <img src={'./coll.svg'} />


    return (
        <Styled.GridContainer container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Styled.List>
                    {collections.map((e, i) => {
                        return (
                        <Link to={`/${e.id}`}>
                            <Styled.Wrapper>
                                <Styled.ListItem key={i}>
                                    <Styled.ListItemAvatar>
                                        <Styled.img src={'./coll.svg'} />
                                    </Styled.ListItemAvatar>
                                    <Styled.TextBlock>
                                        <Styled.TypographyTitle>{e.name}</Styled.TypographyTitle>
                                        <Divider variant="fullWidth" />
                                        <Styled.TypographyDesc>{e.description}</Styled.TypographyDesc>
                                    </Styled.TextBlock>
                                </Styled.ListItem>
                            </Styled.Wrapper>
                        </Link>
                    )})}
                </Styled.List>
            </Grid>
            <Grid item xs={3}></Grid>
        </Styled.GridContainer>
    )
}

export default CollectionsListPage;