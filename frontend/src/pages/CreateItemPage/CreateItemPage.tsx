import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./CreateItemPage.styles"
import { ImageSlider, TextInput, TitleBar } from "../../components";
import { useCreateItem } from "../../hook";
import { IItemBase } from "../../models";

const CreateItemPage = () => {
  const params = useParams();
  const { collectionId } = params;
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const navigate = useNavigate();


  const { mutate } = useCreateItem({
    name,
    description,
    condition,
    location,
    price,
    category,
    collection_id: +collectionId!,
    properties: {},
  } as IItemBase, () => {
    navigate(-1);
  })

  const createItemHandler = () => {
    console.log(name);
    console.log(description);

    if (name === "" || description === "") {
      alert("Fields are required");
      return;
    }
    mutate();
  };

  return (
    <Styled.GridOuterContainer container >

      <TitleBar collectionId={collectionId!} />
      <Styled.GridItem item xs={8} sm={6}>
        <Typography variant="h4" component="h4" margin={"1rem"} display={"block"}>
          Create new item
        </Typography>
        <ImageSlider/>
        <TextInput label="Name" required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
        <TextInput label="Description" required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
        <TextInput label="Condition" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCondition(e.target.value)} />
        <TextInput label="Location" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} />
        <TextInput label="Price" type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(+e.target.value)} />
        <TextInput label="Category" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} />
        <Styled.UploadButton variant="contained" component="label"  >
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Styled.UploadButton>
        <Styled.SubmitButtonWrapper>
          <Styled.SubmitButton fullWidth variant="contained" onClick={createItemHandler}>
              Create
            </Styled.SubmitButton>
        </Styled.SubmitButtonWrapper>
      </Styled.GridItem>
    </Styled.GridOuterContainer>
  );
};

export default CreateItemPage;
