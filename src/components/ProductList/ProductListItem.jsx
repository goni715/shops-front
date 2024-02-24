import product_img from "../../assets/images/mobile2.jpg";


const ProductListItem = ({product}) => {
    const {
        _id,
        productName,
        categoryId,
        description,
        price,
        quantity,
        image
    } = product || {};


    const {public_id, image_url} = image || {};
    return (
        <>

            <div className="card px-3 py-6 rounded-lg bg-[#80808019] w-[18rem]">
                <img
                    src={product_img}
                    className="card-img-top h-[280px] rounded-md"
                    alt="product_image"
                />
                <div className="card-body space-y-4 mt-2">
                    <div className="card-name-price flex justify-between">
                        <h5 className="card-title">{productName}</h5>
                        <h5 className="card-title card-price text-green-500 font-bold">
                            ${price}
                        </h5>
                    </div>
                    <p className="card-text text-[#5A5959]">
                        {description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price flex justify-between">
                        <button
                            className="btn bg-blue-500 text-white hover:bg-blue-700 px-3 py-2 rounded"
                        >
                            More Details
                        </button>
                        <button
                            className="btn bg-gray-900 text-white px-3 py-2 hover:bg-gray-700 rounded"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductListItem;