import { Button, Box, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ItemsGrid from "../ItemsGrid/ItemsGrid";
import TitleBar from "../TitleBar/TitleBar";
import { ButtonSx } from "./CollectionItems.styles";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

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
      <Grid container justifyContent={"right"} spacing={{xs:'2', sm: '10'}}>
        <Grid item xs={7} md={5}></Grid>
        <Grid item xs={2} md={2}>
          <Link to={`/createItem/${collectionId}`}>
            <Button sx={ButtonSx} variant="contained">
                <Box sx={{display: {xs: "none", sm: "block"}}} >Create new user</Box>
                <PersonAddIcon sx={{display: {xs: "block", sm: "none"}}} fontSize="large"/>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={2} md={2}>
          <Button sx={ButtonSx} variant="contained">
              <Box sx={{display: {xs: "none", sm: "block"}}} >Manage users</Box>
              <ManageAccountsIcon sx={{display: {xs: "block", sm: "none"}}} fontSize="large"/>
          </Button>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>
      <ItemsGrid param={collectionId} />
    </Grid>
  );
};

export default CollectionItems;
