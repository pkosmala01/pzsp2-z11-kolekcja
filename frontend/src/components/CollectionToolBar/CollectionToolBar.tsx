import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import * as Styled from "./CollectionToolBar.styles";

type CollectionToolBarProps = {
  collectionId: number;
};

const CollectionToolBar: React.FC<CollectionToolBarProps> = ({
  collectionId,
}) => {
  return (
    <Styled.GridContainer
      container
      justifyContent={"right"}
      spacing={{ xs: "2", sm: "10" }}>
      <Grid item xs={7} md={5}></Grid>
      <Grid item xs={2} md={2}>
        <Link to={`/createItem/${collectionId}`}>
          <Styled.Button variant="contained">
            <Styled.ActionBox>Create new item</Styled.ActionBox>
            <Styled.AddItemIcon />
          </Styled.Button>
        </Link>
      </Grid>
      <Grid item xs={2} md={2}>
        <Link to={`/manage-users/${collectionId}`}>
          <Styled.Button variant="contained">
            <Styled.ActionBox>Manage users</Styled.ActionBox>
            <Styled.ManageUsersIcon />
          </Styled.Button>
        </Link>
      </Grid>
      <Grid item xs={1} md={1}></Grid>
    </Styled.GridContainer>
  );
};

export default CollectionToolBar;
