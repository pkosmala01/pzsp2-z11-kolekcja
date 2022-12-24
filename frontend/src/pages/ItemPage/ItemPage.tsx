import { Grid, Divider } from "@mui/material/";
import { useParams } from "react-router-dom";
import * as Styled from "./ItemPage.styles";
import TitleBar from "../../components/TitleBar/TitleBar";
import { useItem } from "../../hook";

const ItemPage = () => {
  const { collectionId, itemId }  = useParams();

  const { data, isLoading, isFetching } = useItem(+itemId!);

  return (
    <Styled.GridContainer container>
      <Grid item xs={2} sm={3} ></Grid>
      <Grid item xs={8} sm={6} >
        <TitleBar collectionId={collectionId!} />
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
