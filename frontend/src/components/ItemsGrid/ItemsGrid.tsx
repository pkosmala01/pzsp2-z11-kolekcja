import axios from "axios";
import { useQuery } from "react-query";
import { URL } from "../../untils/endpoint";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import * as Styled from "./ItemsGrid.styles"
import { Link } from "react-router-dom";

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
                        : (
                          <CardMedia
                          component="img"
                          height="140"
                          image={e.photo}
                          alt={e.name}
                        />
                        )
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
