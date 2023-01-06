import { Grid } from "@mui/material";
import * as Styled from "./ItemsGrid.styles";
import { useCollectionItems } from "../../hook";
import { ItemCard } from "../ItemCard";
import { IItemPlainData } from "../../models";
import ItemCardSkeleton from "../ItemCardSkeleton";

type ItemsGridProps = {
  collectionId: number;
};

const ItemsGrid: React.FC<ItemsGridProps> = ({ collectionId }) => {

  const { data, isLoading, isFetching, refetch } = useCollectionItems(collectionId);

  return (
    <Styled.GridContainer container spacing={2}>
      {isLoading || isFetching
        ? [...Array(4)].map(() => {
            return (
              <Grid item>
                <ItemCardSkeleton />
              </Grid>
            );
          })
        : data!.map((item: IItemPlainData, index: number) => {
            return (
              <Grid item>
                <ItemCard
                  item={item}
                  collectionId={collectionId}
                  deleteItem={refetch}
                />
              </Grid>
            );
          })}
    </Styled.GridContainer>
  );
};

export default ItemsGrid;
