import Layout from "../components/Layout/Layout.jsx";
import TitleMetaTag from "../components/Layout/TitleMetaTag.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const CartPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);


    return (
        <>
            <TitleMetaTag title="Ecommerce"/>
            <Layout>
              <h1>This is Cart Page</h1>
            </Layout>
        </>
    );
};

export default CartPage;