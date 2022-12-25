import { Grid, Divider } from "@mui/material/";
import { useParams } from "react-router-dom";
import * as Styled from "./ItemPage.styles";
import TitleBar from "../../components/TitleBar/TitleBar";
import { useItem, useItemImage } from "../../hook";

const ItemPage = () => {
  const { collectionId, itemId }  = useParams();

  const plainData = useItem(+itemId!);
  const image = useItemImage(+itemId!);

  return (
    <Styled.GridContainer container>
      <TitleBar collectionId={collectionId!} />
      <Grid item xs={2} sm={3} ></Grid>
      <Grid item xs={8} sm={6} >
        <Styled.Paper>
          <Styled.ImageWrapper>
            {image.isLoading || image.isFetching
              ? <Styled.ImageSkeleton variant="rounded"></Styled.ImageSkeleton>
              : image.data === null
                ? <Styled.DefaultImage />
                : <Styled.Image src={image.data} alt={plainData.isLoading || plainData.isFetching ? plainData.data?.name : "img"} />
              }
          </Styled.ImageWrapper>
        </Styled.Paper>
        <Styled.Paper>
          {plainData.isLoading || plainData.isFetching
            ?  <Styled.TitleSkeleton></Styled.TitleSkeleton>
            : <Styled.TypographyTitle>{plainData.data!.name}</Styled.TypographyTitle>
          }
          <Styled.TypographySubTitle>
            <Divider textAlign={"left"}>description</Divider >
          </Styled.TypographySubTitle>
          {plainData.isLoading || plainData.isFetching
            ?  <Styled.TextSkeleton/>
            : <Styled.TypographyDesc>{plainData.data!.description}</Styled.TypographyDesc>
          }
        </Styled.Paper>
      </Grid>
      <Grid item xs={2} sm={3}></Grid>
  </Styled.GridContainer>
  )

}

export default ItemPage;
