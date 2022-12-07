import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout";
import CollectionsListPage from "../pages/CollectionsListPage/CollectionsListPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

import '../styles/styles.css'

const routes: { title: string; link: string }[] = [
  {
    title: "collections",
    link: "/collectionsList",
  },
];

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Layout routes={routes} />}>
        <Route path="" element={<HomePage />} />
        <Route path="collectionsList" element={<CollectionsListPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default App;
