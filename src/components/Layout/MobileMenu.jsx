import {FaUserCircle} from "react-icons/fa";


const MobileMenu = ({showMenu}) => {

    return (
        <>
            <div
                className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 bottom-0 h-screen z-20 flex w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 md:hidden transition-all duration-500 rounded-r-xl shadow-md`}>
                <div className="card">
                    <div className="flex items-center justify-start gap-3">
                        <FaUserCircle size={50}/>
                        <div>
                            <h1>Hello User</h1>
                            <h1 className="text-sm text-slate-500">Premium user</h1>
                        </div>
                    </div>
                    <nav className="nav-items mt-12">
                        <ul className="space-y-4 text-xl">
                            <h1 className="cursor-pointer hover:text-primary duration-500">Home </h1>
                            <h1 className="cursor-pointer hover:text-primary duration-500">About </h1>
                            <h1 className="cursor-pointer hover:text-primary duration-500">Contact </h1>
                            <h1 className="cursor-pointer hover:text-primary duration-500">Service </h1>
                        </ul>
                    </nav>
                </div>
                <div className="footer">
                    <h1>
                        Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>{" "}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;