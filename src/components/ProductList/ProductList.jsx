import {useGetProductsQuery} from "../../redux/features/product/productApi.js";
import product_img from "../../assets/images/mobile2.jpg";
import Filter from "../Filter.jsx";
import ProductListItem from "./ProductListItem.jsx";
import ListLoading from "../Loader/ListLoading.jsx";


const ProductList = () => {
    const {data, isLoading, isError, error} = useGetProductsQuery();
    const products = data?.data || [];

    return (
        <>
            <Filter/>
            <div className="row grid grid-cols-1">
                <div className="col-md-9 container">

                    {isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ): (
                        <>
                            <div className="flex justify-center md:justify-start flex-wrap gap-4">

                                {products.length > 0 && (

                                     products.map((item, i) => {
                                        return (
                                            <>
                                                <ProductListItem product={item} key={i.toString()}/>
                                            </>
                                        )
                                    })
                                  )
                                }


                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </>
    );
};

export default ProductList;