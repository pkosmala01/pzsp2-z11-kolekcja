import { Link } from "react-router-dom";
import { Grid, Divider } from "@mui/material";
import * as Styled from "./CollectionsListPage.styles";
import CreateCollection from "../../components/CreateCollection/CreateCollection";
import { ENDPOINT, URL } from "../../untils/endpoint";
import axios from "axios";
import { useQuery } from "react-query";

const CollectionsListPage = () => {
    const { data, isLoading, isFetching, refetch } = useQuery('collection', async () => {
        const responce = await axios.get(URL + ENDPOINT.collectionsList, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
        });
        return responce.data;
    })

    return (
        <Styled.GridContainer container>
            <Grid item xs={2} sm={3} ></Grid>
            <Grid item xs={8} sm={6} >
                <CreateCollection func={()=>{refetch()}} />
                {isLoading || isFetching
                    ?
                    <Styled.SpinnerBox>
                        <Styled.CircularProgress></Styled.CircularProgress>
                    </Styled.SpinnerBox>
                    :
                    <Styled.List>
                        {data.map((e: any, i: any) => {
                            return (
                                <Link to={`/collection/${e.collection_id}`} key={i}>
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
                                </Link>
                            )})
                        }
                    </Styled.List>
                }
            </Grid>
            <Grid item xs={2} sm={3}></Grid>
        </Styled.GridContainer>
    )
}

export default CollectionsListPage;