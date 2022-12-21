import { TextField, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
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
  CreateBtnWrapper,
  CreateCollectionBtn,
  CreateCollectionFab,
} from "./CreateCollection.styles";

const CreateCollection = (props: {func: any}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const { isLoading, mutate } = usePostData(URL + ENDPOINT.createCollection, () => {
    props.func();
    if(window.innerWidth < 760){
      document.getElementById("create-collection-fab")?.style.setProperty("display", "flex");
    }
    else{
      document.getElementById("create-collection-btn")?.style.setProperty("display", "flex");
    }
    document.getElementById("create-collection-form")?.style.setProperty("display", "none");
  })

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const createHandler = () => {
    mutate({ name, description });
  };

  const toggleCreateCollection = (e: any) => {
    document.getElementById("create-collection-btn")?.style.setProperty("display", "none");
    document.getElementById("create-collection-form")?.style.setProperty("display", "block");

    if(e.currentTarget.id === "create-collection-btn"){
      document.getElementById("create-collection-btn")?.style.setProperty("display", "none");
    }
    else if(e.currentTarget.id === "create-collection-fab") {
      document.getElementById("create-collection-fab")?.style.setProperty("display", "none");
    }
  }

  return (
    <>
      <CreateCollectionFab id="create-collection-fab" onClick={toggleCreateCollection}>
        <AddIcon />
      </CreateCollectionFab>
      <CreateBtnWrapper id="create-collection-btn" onClick={toggleCreateCollection} >
          <CreateCollectionBtn >Add Collection</CreateCollectionBtn>
      </CreateBtnWrapper>
      <CollectionWrapper id={"create-collection-form"} display={"none"}>
        {
        isLoading &&
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
              disabled={isLoading}
            />
          </MyFormControl>
          <MyFormControl>
            <TextField
              id="filled-description"
              onChange={handleDescriptionChange}
              label="Description"
              variant="standard"
              disabled={isLoading}
            />
          </MyFormControl>
          <SubmitButton onClick={createHandler} disabled={isLoading} variant="contained">
            {/* <ButtonTypography>Create</ButtonTypography> */}
            Create
          </SubmitButton>
        </Box>
      </CollectionWrapper>
    </>
  )
};

export default CreateCollection;
