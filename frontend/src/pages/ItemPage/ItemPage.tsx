import axios from "axios";
import { Grid, Divider } from "@mui/material/";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { URL, ENDPOINT } from "../../untils/endpoint";
import * as Styled from "./ItemPage.styles";
import TitleBar from "../../components/TitleBar/TitleBar";

const ItemPage = () => {
  const { collectionId, itemId }  = useParams();

  const { data, isLoading, isFetching } = useQuery('item', async () => {
    const responce = await axios.get(`${URL}${ENDPOINT.item}/${itemId}`, {
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
        <TitleBar param={collectionId} />
        <Styled.Paper>
          <Styled.ImageWrapper>
            {isLoading || isFetching
              ? <Styled.ImageSkeleton variant="rounded"></Styled.ImageSkeleton>
              : typeof data.photo === 'undefined'
                ?
                <Styled.DefaultImage />
                :
                <>
                {/* convert BLOB to img elem
                    var image = new Image();
                    image.src = URL.createObjectURL(blob);
                    document.body.appendChild(image); */}
                </>
              }
          </Styled.ImageWrapper>
        </Styled.Paper>
        <Styled.Paper>
          {isLoading || isFetching
            ?  <Styled.TitleSkeleton></Styled.TitleSkeleton>
            : <Styled.TypographyTitle>{data.name}</Styled.TypographyTitle>
          }
          <Styled.TypographySubTitle>
            <Divider textAlign={"left"}>description</Divider >
          </Styled.TypographySubTitle>
          {isLoading || isFetching
            ?  <Styled.TextSkeleton/>
            : <Styled.TypographyDesc>{data.description}</Styled.TypographyDesc>
          }
        </Styled.Paper>
      </Grid>
      <Grid item xs={2} sm={3}></Grid>
  </Styled.GridContainer>
  )

}

export default ItemPage;

// const responce = await axios.get(URL + `collections/${props.param}/items`, {