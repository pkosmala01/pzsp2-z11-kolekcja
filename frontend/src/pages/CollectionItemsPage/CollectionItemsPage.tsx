import { Grid } from "@mui/material";
import {  useParams } from "react-router-dom";
import { CollectionToolBar, ItemsGrid, TitleBar } from "../../components";

const CollectionItemsPage = () => {
  const params = useParams();
  const { collectionId } = params;

  return (
    <Grid container>
      <TitleBar collectionId={collectionId!} />
      <CollectionToolBar collectionId={+collectionId!} />
      <Grid item xs={1} sm={3}></Grid>
      <Grid item xs={10} sm={8}>
        <ItemsGrid collectionId={+collectionId!}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default CollectionItemsPage;
