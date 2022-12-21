import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout";
import CollectionsListPage from "../pages/CollectionsListPage/CollectionsListPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ItemPage from "../pages/ItemPage/ItemPage";

import isLogged from "../untils/isLogged";
import "../styles/styles.css";
import CollectionItems from "../components/CollectionItems/CollectionItems";

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
      </Route>
      <Route path="*" element={<RequireAuth><CollectionsListPage /></RequireAuth>}/>
      <Route path="" element={<RequireAuth><CollectionsListPage /></RequireAuth>}/>
    </Routes>
  );
};

export default App;
