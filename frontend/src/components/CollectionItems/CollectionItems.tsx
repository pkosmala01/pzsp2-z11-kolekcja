import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import ItemsGrid from "../ItemsGrid/ItemsGrid";
import TitleBar from "../TitleBar/TitleBar";
import { ButtonSx, ButtonWrapper } from "./CollectionItems.styles";

const CollectionItems = () => {
  const params = useParams();
  const { collectionId } = params;
  return (
    <>
      <TitleBar param={collectionId} />
      <ButtonWrapper>
        <Button sx={ButtonSx} variant="contained">Create new item</Button>
        <Button sx={ButtonSx} variant="contained">Manage users</Button>
      </ButtonWrapper>
      <ItemsGrid param={collectionId}/>
    </>
  );
};

export default CollectionItems;
