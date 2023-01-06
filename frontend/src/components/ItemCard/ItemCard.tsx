import {
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import * as Styled from "./ItemCard.styles";
import { IItemPlainData } from "../../models";
import { useItemImage } from "../../hook";
import useDeleteItem from "../../hook/item/useDeleteItem";

type ItemCardProps = {
  item: IItemPlainData;
  collectionId: number;
  deleteItem: () => void;
};

const ItemCard: React.FC<ItemCardProps> = ({ item, collectionId, deleteItem }) => {
  const image = useItemImage(item.item_id);

  const { mutate } = useDeleteItem(item, deleteItem);

  const deleteItemHandler = () => {
    console.log("delete");
    mutate();
  };

  return (
    <Styled.CardWrapper>
      <Styled.IconButtonn aria-label="delete" onClick={deleteItemHandler}>
        <DeleteIcon />
      </Styled.IconButtonn>
      <Link to={`/collection/${collectionId}/items/${item.item_id}`}>
        <CardActionArea>
          {image.isLoading || image.isFetching ? (
            <Styled.Skeleton>
              <Styled.ImageWrapper></Styled.ImageWrapper>
            </Styled.Skeleton>
          ) : (
            <Styled.ImageWrapper>
              {image.data === null ? (
                <Styled.DefaultImage />
              ) : (
                <Styled.Image src={image.data} alt={item.name} />
              )}
            </Styled.ImageWrapper>
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Styled.CardWrapper>
  );
};

export { ItemCard, type ItemCardProps };
