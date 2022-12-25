import {  CardActionArea, CardContent, Typography } from "@mui/material";
import * as Styled from './ItemCardSkeleton.styles'

const ItemCardSkeleton: React.FC = () => {
  return (
    <Styled.CardWrapper>
      <CardActionArea>
        <Styled.Skeleton component='div'>
          <Styled.ImageWrapper>
          </Styled.ImageWrapper>
        </Styled.Skeleton>
        <CardContent>
          <Styled.Skeleton >
            <Typography gutterBottom variant="h5" component="div">ItemCardSkeleton</Typography>
          </Styled.Skeleton>
          <Styled.Skeleton>
            <Typography variant="body2" color="text.secondary">ItemCardSkeleton</Typography>
          </Styled.Skeleton>
        </CardContent>
      </CardActionArea>
    </Styled.CardWrapper>
  )
}

export default ItemCardSkeleton;