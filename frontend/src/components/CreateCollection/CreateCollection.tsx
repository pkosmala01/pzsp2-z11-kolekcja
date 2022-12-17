import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";
import usePostData from "../../hook/usePostData";
import { ENDPOINT, URL } from "../../untils/endpoint";
import {
  CollectionWrapper,
  CreateBannerTypography,
  MyFormControl,
  SubmitButton,
  BgBlur,
  CircularProgress,
  blur,
} from "./CreateCollection.styles";

const CreateCollection = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const { data, isLoading, error, mutate } = usePostData(URL + ENDPOINT.createCollection)

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const createHandler = () => {
    console.log("create");
    console.log(name);
    console.log(description);
    mutate({ name, description });
  };

  return (
    <CollectionWrapper>
      {isLoading &&
        <BgBlur>
          <CircularProgress></CircularProgress>
        </BgBlur>
      }
      <Box sx={isLoading ? blur : {}}>
        <CreateBannerTypography>Create collection</CreateBannerTypography>
        <MyFormControl>
          <TextField
            id="filled-name"
            onChange={handleNameChange}
            label="Name"
            variant="standard"
            required
          />
        </MyFormControl>
        <MyFormControl>
          <TextField
            id="filled-description"
            onChange={handleDescriptionChange}
            label="Description"
            variant="standard"
          />
        </MyFormControl>
        <Button onClick={createHandler} sx={SubmitButton} variant="contained">
          {/* <ButtonTypography>Create</ButtonTypography> */}
          Create
        </Button>
      </Box>
    </CollectionWrapper>
  )
};

export default CreateCollection;
