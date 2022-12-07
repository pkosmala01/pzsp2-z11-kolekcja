import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = (routes: { title: string; link: string }[]) => {
  return (
    <>
      <Header {...routes} />
      <Outlet />
    </>
  );
};

export default Layout;
