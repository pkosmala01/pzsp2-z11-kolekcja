import { Outlet } from "react-router-dom";
import { RouteType } from "../../untils/type";
import Header from "../Header";

const Layout = (props: {routes: RouteType[]}) => {
  return (
    <>
      <Header routes={props.routes} />
      <Outlet />
    </>
  );
};

export default Layout;
