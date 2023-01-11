import { Card, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import * as Styled from "./ManageUsers.styles";
import { TitleBar } from "../../components";
import { Grid } from "@mui/material/";
import useGetUsers from "../../hook/user/useGetUsers";

const ManageUsers = () => {
  const { collectionId } = useParams();

  const { data, refetch } = useGetUsers(+collectionId!);

  const users: { [id: number]: string } = {
    1: "Super User",
    2: "Collection Administrator",
    3: "User",
  };

  return (
    <Styled.GridOuterContainer container>
      <TitleBar collectionId={collectionId!} />
      <Grid item xs={2} sm={3}></Grid>
      <Grid item xs={8} sm={6}>
        <Paper>
          <Typography>Manage Users</Typography>
        </Paper>
        {data?.map((permission, index) => (
          <Card key={index}>
            <Typography>{permission.user_id}</Typography>
            <Typography>{users[permission.permission_level]}</Typography>
          </Card>
        ))}
      </Grid>
      <Grid item xs={2} sm={3}></Grid>
    </Styled.GridOuterContainer>
  );
};

export default ManageUsers;
