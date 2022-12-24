import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import CollectionsListPage from "../pages/CollectionsListPage/CollectionsListPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ItemPage from "../pages/ItemPage/ItemPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import isLogged from "../untils/isLogged";
import "../styles/styles.css";
import CollectionItems from "../components/CollectionItems/CollectionItems";
import CreateItem from "../pages/CreateItem/CreateItem";

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
        <Route path="collection/:collectionId" element={<RequireAuth><CollectionItems /></RequireAuth>}/>
        <Route path="collection/:collectionId/items/:itemId" element={<RequireAuth><ItemPage /></RequireAuth>}/>
        <Route path="createItem/:collectionId" element={<RequireAuth><CreateItem /></RequireAuth>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
