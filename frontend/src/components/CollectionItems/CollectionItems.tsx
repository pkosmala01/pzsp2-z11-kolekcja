import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import ItemsGrid from "../ItemsGrid/ItemsGrid";
import TitleBar from "../TitleBar/TitleBar";
import { ButtonSx } from "./CollectionItems.styles";

const CollectionItems = () => {
  const params = useParams();
  const { collectionId } = params;
  return (
    <Grid container>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10} md={10}>
          <TitleBar param={collectionId} />
        </Grid>
      </Grid>
      <Grid container justifyContent={"right"} spacing={2}>
        <Grid item xs={4} md={2}>
          <Button sx={ButtonSx} variant="contained">
            Create new item
          </Button>
        </Grid>
        <Grid item xs={4} md={2}>
          <Button sx={ButtonSx} variant="contained">
            Manage users
          </Button>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>
      <Grid item xs={10} md={10}>
        <ItemsGrid param={collectionId} />
      </Grid>
    </Grid>
  );
};

export default CollectionItems;
