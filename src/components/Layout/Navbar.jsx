import {BiSolidMoon} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";
import {HiMenuAlt3} from "react-icons/hi";
import MobileMenu from "./MobileMenu.jsx";
import {useState} from "react";
import logo from "../../assets/images/logo.svg";
import {Badge} from "antd";
import {IoCartOutline} from "react-icons/io5";
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";

const NavLinks = [
    {
        id: 1,
        name: "HOME",
        link: "/",
    },
    {
        id: 2,
        name: "CATEGORY",
        link: "/category",
    },
    {
        id: 1,
        name: "REGISTER",
        link: "/register",
    },
    {
        id: 1,
        name: "LOGIN",
        link: "/login",
    }
];


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="right-0 shadow-md z-10 bg-white dark:bg-dark dark:text-white duration-300">
                <div className="container">
                    <div className="flex h-[75px] items-center justify-between">
                        <Link to="/" className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] cursor-pointer">
                            <img src={logo} className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]" alt=""/>
                        </Link>
                        <div
                            className="w-[60%] flex overflow-hidden items-center justify-center bg-white h-[40px] border-[#cccccc] rounded-[5px]">
                            <input className="w-[160px] sm:w-full md:w-[60%] border pl-2 sm:pl-3 border-gray-500 h-full outline-none"
                                   type="email"
                                   placeholder="search..."/>
                            <button className="bg-[#4caf50] p-2 h-full">
                                <FaSearch size={22} className="text-white"/>
                            </button>
                        </div>
                        <nav className="md:block hidden">
                            <ul className="flex items-center gap-8">
                                {
                                    NavLinks.map((item, i) => {
                                        return (
                                            <>
                                                <Link to={item.link} key={i.toString()}
                                                    className="cursor-pointer hover:text-primary transition-colors duration-500 text-lg font-medium">
                                                    {item.name}
                                                </Link>
                                            </>
                                        )
                                    })
                                }


                                <Badge count={4}>
                                    <Link to="/cart">
                                        <IoCartOutline size={30} className="cursor-pointer"/>
                                    </Link>
                                </Badge>

                            </ul>
                        </nav>

                        {/* Mobile view  */}
                        <div className="flex items-center gap-2 md:gap-4 md:hidden">
                            <Badge count={4}>
                                <Link to="/cart">
                                    <IoCartOutline size={30} className="cursor-pointer"/>
                                </Link>
                            </Badge>

                            {/* Mobile Hamburger icon */}
                            {showMenu ? (
                                <IoMdClose
                                    onClick={toggleMenu}
                                    className=" cursor-pointer transition-all"
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="cursor-pointer transition-all"
                                    size={30}
                                />
                            )}

                        </div>
                    </div>
                </div>
            </div>

            <MobileMenu showMenu={showMenu}/>
        </>
    );
};

export default Navbar;