import { CardActionArea, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import * as Styled from './ItemCard.styles'
import { IItemPlainData } from '../../models'
import { useItemImage } from "../../hook";

type ItemCardProps = {
  item: IItemPlainData
  collectionId: number
};

const ItemCard: React.FC<ItemCardProps> = ({item, collectionId}) => {

  const image = useItemImage(item.item_id);

  return (
    <Link to={`/collection/${collectionId}/items/${item.item_id}`}>
      <Styled.CardWrapper>
        <CardActionArea>
          {image.isLoading || image.isFetching
            ? <Styled.Skeleton><Styled.ImageWrapper></Styled.ImageWrapper></Styled.Skeleton>
            : (
              <Styled.ImageWrapper>
                {image.data === null
                  ? <Styled.DefaultImage />
                  : <Styled.Image src={image.data} alt={item.name} />
                }
              </Styled.ImageWrapper>
            )
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Styled.CardWrapper>
    </Link>
  )
}

export {
  ItemCard,
  type ItemCardProps
};