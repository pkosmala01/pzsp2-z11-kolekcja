import { Button, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonSx } from "../../components/CollectionItems/CollectionItems.styles";
import TitleBar from "../../components/TitleBar/TitleBar";
import usePostData from "../../hook/usePostData";
import { URL } from "../../untils/endpoint";

const CreateItem = () => {
  const params = useParams();
  const { collectionId } = params;
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const navigate = useNavigate();

  const { isLoading, isError, mutate } = usePostData(URL + "items", () => {
    navigate(-1);
  });

  console.log(isLoading, isError);

  const createItemHandler = () => {
    if (name === "" || description === "") {
      alert("Fields are required");
      return;
    }
    mutate({
      name,
      description,
      condition,
      location,
      price,
      category,
      collection_id: collectionId,
    });
  };

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
          required
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Condition"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCondition(e.target.value)
          }
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Location"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Price"
          variant="outlined"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(+e.target.value)
          }
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Category"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCategory(e.target.value)
          }
        />
      </Grid>
      <Grid item xs={10} md={8} margin={"1rem"}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Grid>
      <Grid item xs={10} md={4} margin={"1rem"}>
        {isLoading ? (
          <LoadingButton
            fullWidth
            sx={ButtonSx}
            loading
            loadingIndicator="Loading…"
            variant="outlined">
            Creating
          </LoadingButton>
        ) : (
          <Button
            sx={ButtonSx}
            fullWidth
            variant="contained"
            onClick={createItemHandler}>
            Create
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default CreateItem;
