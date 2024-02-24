import Layout from "../components/Layout/Layout.jsx";
import {useGetProductsQuery, useSearchProductQuery} from "../redux/features/product/productApi.js";
import ProductListItem from "../components/ProductList/ProductListItem.jsx";
import {useParams} from "react-router-dom";
import ListLoading from "../components/Loader/ListLoading.jsx";
import Search from "../components/Search.jsx";


const SearchPage = () => {
    const {keyword} = useParams();
    const {data, isLoading, isError, error} = useSearchProductQuery(keyword);
    const products = data?.data || [];
    console.log(products)


    return (
        <>
            <Layout>
                {isLoading ? (
                    <>
                        <ListLoading/>
                    </>
                ): (
                    <>
                       <Search products={products}/>
                    </>
                    )
                }
            </Layout>
        </>
    );
};

export default SearchPage;