import { Routes, Route } from "react-router-dom";

import { Layout } from "../components";


import isLogged from "../untils/isLogged";
import "../styles/styles.css";
import {
  CollectionsListPage,
  CreateItemPage,
  ItemPage,
  CollectionItemsPage,
  LoginPage,
  NotFoundPage
} from "../pages";
import ManageUsers from "../pages/MagageUsersPage";

const routes: { title: string; link: string }[] = [
  {
    title: "collections",
    link: "/collectionsList",
  },
];

const RequireAuth: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  if (!isLogged) {
    return <LoginPage />;
  }
  return children;
};

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Layout routes={routes} />}>
        <Route path="" element={ <RequireAuth><CollectionsListPage /></RequireAuth>}/>
        <Route path="collection/:collectionId" element={<RequireAuth><CollectionItemsPage /></RequireAuth>}/>
        <Route path="collection/:collectionId/items/:itemId" element={<RequireAuth><ItemPage /></RequireAuth>}/>
        <Route path="createItem/:collectionId" element={<RequireAuth><CreateItemPage /></RequireAuth>}/>
        <Route path="manage-users/:collectionId" element={<RequireAuth><ManageUsers /></RequireAuth>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
