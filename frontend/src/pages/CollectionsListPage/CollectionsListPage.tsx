import { Link } from "react-router-dom";
import { Grid, Divider } from "@mui/material";
import * as Styled from "./CollectionsListPage.styles";
import CreateCollection from "../../components/CreateCollection/CreateCollection";
import { ENDPOINT, URL } from "../../untils/endpoint";
import axios from "axios";
import { useQuery } from "react-query";

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

  const { data, isLoading } = useQuery('collection', async () => {
    const responce = await axios.get(URL + ENDPOINT.collectionsList);
    console.log(responce.data);

    return responce.data;
  })
    return (
        <Styled.GridContainer container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
            <CreateCollection />
                <Styled.List>
                    {isLoading
                        ?
                        <Styled.Wrapper>
                            <Styled.CircularProgress></Styled.CircularProgress>
                        </Styled.Wrapper>
                        :
                        data.map((e: any, i: any) => {
                            return (
                            <Link to={`/${e.id}`} key={i}>
                                <Styled.Wrapper>
                                    <Styled.ListItem>
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
                        )})

                    }
                </Styled.List>
            </Grid>
            <Grid item xs={3}></Grid>
        </Styled.GridContainer>
    )
}

export default CollectionsListPage;