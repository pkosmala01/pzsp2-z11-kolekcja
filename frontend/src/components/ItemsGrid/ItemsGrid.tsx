import axios from "axios";
import { useQuery } from "react-query";
import { URL } from "../../untils/endpoint";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const ItemsGrid = (props: { param: string | undefined }) => {
  //   const { data, isLoading } = useGetData(`collections/${props.param}/items`);
  const { data: itemsData, isLoading: itemsLoading } = useQuery(
    "collectionItems",
    async () => {
      const responce = await axios.get(
        URL + `collections/${props.param}/items`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return responce.data;
    }
  );

  const items = itemsLoading ? null : itemsData;

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {items &&
        items.map((e: any) => {
          return (
            <Grid item xs={5} md={2} key={e.item_id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={e.image}
                    alt={e.name}
                  />
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
            </Grid>
          );
        })}
    </Grid>
  );
};

export default ItemsGrid;
