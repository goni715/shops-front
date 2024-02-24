import Layout from "../components/Layout/Layout.jsx";
import TitleMetaTag from "../components/Layout/TitleMetaTag.jsx";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaEdit} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import {Table} from "antd";
import {Decrement, Increment, RemoveCartItem} from "../redux/features/cart/cartSlice.js";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Image",
        dataIndex: "image",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Action",
        dataIndex: "action",
    }
]


const CartPage = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    const cart = useSelector((state)=>state.cart.cart);
    const subTotal = useSelector((state)=>{
        const carts = state.cart.cart;
        //totalPrice
        return carts.reduce((pv,cv)=>{
            return pv + (cv.quantity * cv.price)
        },0)
    });

    const shipping = 20;
    const discount= 10;


    let tableData=[];

    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: cart[i]?.productName,
                image: (
                    <>

                        <img className="w-[60px] h-[60px]" src={cart[i]?.image} alt="product_img" />
                    </>
                ),
                price: cart[i]?.total,
                quantity: (
                    <>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={()=>dispatch(Decrement(cart[i]?.productId))}
                                disabled={cart[i]?.quantity===1}
                                className="bg-blue-500 hover:bg-blue-700 px-4 text-3xl py-1 disabled:cursor-not-allowed text-white font-bold text-md rounded-md">
                                -
                            </button>
                            <span className="text-2xl">{cart[i]?.quantity} </span>
                            <button
                                onClick={()=>dispatch(Increment(cart[i]?.productId))}
                                disabled={cart[i]?.quantity===10}
                                className="bg-blue-500 hover:bg-blue-700 px-4 text-3xl py-1 disabled:cursor-not-allowed text-white font-bold text-md rounded-md">
                                +
                            </button>
                        </div>
                    </>
                ),
                action: (
                    <>
                        <button
                            onClick={()=>dispatch(RemoveCartItem(i))}
                            className="bg-red-500 hover:bg-red-700 px-2 py-2 text-white font-bold text-md rounded-md">
                            <AiFillDelete size={25}/>
                        </button>
                    </>
                )
            });
        }

    }


    return (
        <>
            <TitleMetaTag title="Ecommerce"/>
            <Layout>
                <div className="container min-h-[80vh] grid grid-cols-1 lg:grid-cols-12 mt-[60px] py-6 gap-6">
                    <div className="lg:col-span-9">
                        <h1 className="text-center text-3xl font-bold mb-3">Cart Products</h1>

                        <div className="w-auto overflow-x-auto">
                        <Table columns={columns} dataSource={tableData}/>
                         </div>

                    </div>
                    {/*summary*/}
                    <div className="lg:col-span-3 lg:mt-12">
                        <div
                            className="p-5 flex flex-col flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg">
                            <h1 className="text-3xl text-center">Summary</h1>
                            <div className="flex justify-between w-full mt-3">
                                <p>Subtotal</p>
                                <p>${subTotal}</p>
                            </div>
                            <div className="flex justify-between w-full mt-3">
                                <p>Shipping</p>
                                <p>${shipping}</p>
                            </div>
                            <div className="flex justify-between w-full mt-3">
                                <p>Discount</p>
                                <p>${discount}</p>
                            </div>
                            <div className="flex justify-between w-full mt-3 text-3xl font-bold">
                                <p>Total</p>
                                <p>${Number(subTotal + shipping + discount)}</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center pt-3">
                            <button
                                className="btn bg-gray-900 text-white px-3 py-2 hover:bg-gray-700 rounded"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    );
};

export default CartPage;