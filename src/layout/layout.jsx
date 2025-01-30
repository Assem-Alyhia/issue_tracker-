import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
// import { useLocation } from 'react-router-dom';

const Layout = () => {


    // const location = useLocation();

    // const hideNavAndFooter = [ 
    // ].includes(location.pathname);
    // const showNavBarWhite = [
    // ].includes(location.pathname);
    // const isFaqPage = [].includes(location.pathname);

    return ( 
        <>
        <NavBar />
            <Outlet />
        <Footer /> 
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
