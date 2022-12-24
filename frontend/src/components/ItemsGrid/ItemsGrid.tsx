import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import * as Styled from "./ItemsGrid.styles"
import { Link } from "react-router-dom";
import { useCollectionItems } from "../../hook";

const ItemsGrid = (props: { param: string}) => {

  const { data, isLoading, isFetching } = useCollectionItems(+props.param);

  const items = isLoading || isFetching ? null : data;

  return (
    <Grid container justifyContent={"center"} paddingBottom={"5rem"}>
      <Grid item xs={2} md={3}></Grid>
      <Grid container item xs={8} md={8} spacing={2}>
        {items &&
          items.map((e: any, i:any) => {
            return (
              <Grid item xs={12} md={3} key={i}>
                <Link
                  to={`/collection/${props.param}/items/${e.item_id}`}
                  key={e.item_id}>
                  <Card>
                    <CardActionArea>
                      {typeof e.photo === 'undefined'
                        ? <Styled.DefaultImage></Styled.DefaultImage>
                        : <Styled.CartMediaS component='img' image={e.photo} alt={e.name} />
                      }
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {e.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {e.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })}
      </Grid>
      <Grid item xs={2} md={1}></Grid>
    </Grid>
  );
};

export default ItemsGrid;
