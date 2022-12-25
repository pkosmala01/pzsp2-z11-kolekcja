import { CardActionArea, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import * as Styled from './ItemCard.styles'
import { IItemPlainData } from '../../models'

type ItemCardProps = {
  item: IItemPlainData
};

const ItemCard: React.FC<ItemCardProps> = ({item}) => {
  return (
    <Link to={`/collection/${item.name}/items/${item.itemId}`}>
      <Styled.CardWrapper>
        <CardActionArea>
          <Styled.ImageWrapper>
            {1
              ? <Styled.DefaultImage></Styled.DefaultImage>
              : <Styled.CartMediaS component='img' image={item.name} alt={item.name} />
            }
          </Styled.ImageWrapper>
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