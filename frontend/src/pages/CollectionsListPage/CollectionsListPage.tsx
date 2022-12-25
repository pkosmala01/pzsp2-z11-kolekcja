import { Link } from "react-router-dom";
import { Grid, Divider } from "@mui/material";
import * as Styled from "./CollectionsListPage.styles";
import { CircularProgress, CreateCollection } from "../../components";
import { useCollections } from "../../hook";

const CollectionsListPage = () => {
  const { data, isLoading, isFetching, refetch } = useCollections();

  return (
    <Styled.GridContainer container>
      <Grid item xs={2} sm={3} ></Grid>
      <Grid item xs={8} sm={6} >
        <CreateCollection func={()=>{refetch()}} />
        {isLoading || isFetching
          ?
          <Styled.SpinnerBox>
              <CircularProgress />
          </Styled.SpinnerBox>
          :
          <Styled.List>
              {data!.map((e: any, i: any) => {
                return (
                  <Link to={`/collection/${e.collection_id}`} key={i}>
                    <Styled.ListItem>
                      <Styled.ListItemAvatar>
                        <Styled.Img src={'./coll.svg'} />
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