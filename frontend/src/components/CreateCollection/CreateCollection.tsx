import { TextField, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import {
  CollectionWrapper,
  CreateBannerTypography,
  MyFormControl,
  SubmitButton,
  BgBlur,
  blur,
  CreateBtnWrapper,
  CreateCollectionBtn,
  CreateCollectionFab,
} from "./CreateCollection.styles";
import CircularProgress from "../CircularProgress";
import { IItem } from "../../models";
import { useCreateCollection } from "../../hook";

const CreateCollection = (props: {func: CallableFunction}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const { mutate, isLoading, } = useCreateCollection({name, description} as IItem, () => {
    props.func()
    if(window.innerWidth < 760){
      document.getElementById("create-collection-fab")?.style.setProperty("display", "flex");
    }
    else{
      document.getElementById("create-collection-btn")?.style.setProperty("display", "flex");
    }
    document.getElementById("create-collection-form")?.style.setProperty("display", "none");
  });

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
            <CircularProgress />
          </BgBlur>
        }
        <Box sx={isLoading ? blur : {}}>
          <CreateBannerTypography>Create collection</CreateBannerTypography>
          <MyFormControl>
            <TextField
              id="filled-name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              label="Name"
              variant="standard"
              required
              disabled={isLoading}
            />
          </MyFormControl>
          <MyFormControl>
            <TextField
              id="filled-description"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              label="Description"
              variant="standard"
              disabled={isLoading}
            />
          </MyFormControl>
          <SubmitButton onClick={() => {mutate()}} disabled={isLoading} variant="contained">
            Create
          </SubmitButton>
        </Box>
      </CollectionWrapper>
    </>
  )
};

export default CreateCollection;
