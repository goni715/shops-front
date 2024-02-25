import Layout from "../components/Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {useGetProductQuery, useGetRelatedProductQuery} from "../redux/features/product/productApi.js";
import ProductLoading from "../components/Loader/ProductLoading.jsx";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";
import RelatedLoading from "../components/Loader/RelatedLoading.jsx";
import RelatedProduct from "../components/ProductDetails/RelatedProduct.jsx";


const ProductDetailsPage = () => {
    const {id, catId} = useParams();
    const {data, isLoading} = useGetProductQuery(id);
    const product = data?.data || {};

    const {data:relatedData, isLoading:Loading} = useGetRelatedProductQuery({productId:id, categoryId:catId});
    const relatedProducts = relatedData?.data || {};

    return (
        <>
            <Layout>
                {
                    isLoading ? (
                        <>
                            <ProductLoading/>
                        </>
                    ) : (
                        <>
                            <ProductDetails product={product}/>
                        </>
                    )
                }

                <div className="container py-8">

                    {
                        Loading ? (
                            <>
                                <RelatedLoading/>
                            </>
                        ) : (
                            <>
                                <h1 className="text-2xl font-bold font-serif pb-2">Similar Products</h1>
                                <RelatedProduct products={relatedProducts}/>
                            </>
                        )
                    }

                </div>
            </Layout>
        </>
);
};

export default ProductDetailsPage;