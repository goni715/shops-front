import Layout from "../components/Layout/Layout.jsx";
import TitleMetaTag from "../components/Layout/TitleMetaTag.jsx";


const HomePage = () => {
    return (
        <>

            <TitleMetaTag title="Ecommerce"/>
            <Layout>
               <h2 className="text-red-500">This is Homepgae</h2>
             </Layout>
        </>
    );
};

export default HomePage;