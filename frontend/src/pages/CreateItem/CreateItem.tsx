import { Button, Grid, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { ButtonSx } from "../../components/CollectionItems/CollectionItems.styles";
import TitleBar from "../../components/TitleBar/TitleBar";

const CreateItem = () => {
  const params = useParams();
  const { collectionId } = params;
  return (
    <Grid container justifyContent={"center"} paddingBottom={"5rem"}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10} md={10} margin={"1rem"}>
          <TitleBar param={collectionId} />
        </Grid>
      </Grid>
      <Grid item xs={8} md={8}>
        <Typography
          variant="h4"
          component="h4"
          margin={"1rem"}
          display={"block"}>
          Create new item
        </Typography>
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"} display={"block"}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Condition"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Location"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Category"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Grid>
      <Grid item xs={10} md={4} margin={"1rem"}>
        <Button sx={ButtonSx} fullWidth variant="contained">Create</Button>
      </Grid>
    </Grid>
  );
};

export default CreateItem;
