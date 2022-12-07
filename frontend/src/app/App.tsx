import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout";

import HomePage from "../pages/HomePage";
import CollectionsListPage from "../pages/CollectionsListPage";

const routes: { title: string; link: string }[] = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "collection",
    link: "/collectionsList",
  },
];

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout {...routes} />}>
        <Route
          path="frontend/dist/index.html"
          element={<Navigate replace to="/" />}
        />
        <Route path="dist/index.html" element={<Navigate replace to="/" />} />
        <Route path="" element={<HomePage />} />
        <Route path="collectionsList" element={<CollectionsListPage />} />
      </Route>
    </Routes>
  );
};

export default App;
