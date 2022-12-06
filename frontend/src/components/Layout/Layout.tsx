import { Outlet } from "react-router-dom";
import Header from '../Header';

const Layout = ({routes}) => {
    return <>
        <Header routes={routes} />
        <Outlet />
    </>
}

export default Layout;